import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { TextInput } from '../TextInput';

describe('TextInput', () => {
  it('renders input without label', () => {
    render(<TextInput placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<TextInput label="Username" placeholder="Enter username" />);

    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument();
  });

  it('renders required label with asterisk', () => {
    render(<TextInput label="Email" isRequired />);

    const label = screen.getByText('*');
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('aria-label', 'required');
  });

  it('forwards ref to input element', () => {
    const ref = { current: null };
    render(<TextInput ref={ref} />);

    expect(ref.current).toBeInstanceOf(globalThis.HTMLInputElement);
  });

  it('handles onChange events', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();

    render(<TextInput onChange={handleChange} />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'test');

    expect(handleChange).toHaveBeenCalledTimes(4);
  });

  it('handles onBlur events', async () => {
    const handleBlur = vi.fn();
    const user = userEvent.setup();

    render(<TextInput onBlur={handleBlur} />);

    const input = screen.getByRole('textbox');
    await user.click(input);
    await user.tab();

    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it('displays error message', () => {
    render(<TextInput label="Password" error="Password is required" />);

    const input = screen.getByLabelText('Password');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('Password is required')).toBeInTheDocument();
  });

  it('displays helper text', () => {
    render(<TextInput label="Username" helperText="Must be unique" />);

    expect(screen.getByText('Must be unique')).toBeInTheDocument();
  });

  it('prioritizes error over helper text', () => {
    render(
      <TextInput
        label="Email"
        error="Invalid email"
        helperText="Enter your email address"
      />
    );

    expect(screen.getByText('Invalid email')).toBeInTheDocument();
    expect(
      screen.queryByText('Enter your email address')
    ).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<TextInput className="custom-class" />);

    const textInputContainer = container.querySelector('.text-input');
    expect(textInputContainer).toHaveClass('text-input', 'custom-class');
  });

  it('supports disabled state', () => {
    render(<TextInput disabled />);

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  it('generates unique id when not provided', () => {
    render(<TextInput label="Test" />);

    const input = screen.getByLabelText('Test');
    const label = screen.getByText('Test');

    expect(input.id).toBeTruthy();
    expect(label).toHaveAttribute('for', input.id);
  });

  it('uses provided id', () => {
    render(<TextInput label="Test" id="custom-id" />);

    const input = screen.getByLabelText('Test');
    const label = screen.getByText('Test');

    expect(input).toHaveAttribute('id', 'custom-id');
    expect(label).toHaveAttribute('for', 'custom-id');
  });

  it('links input with description for accessibility', () => {
    render(<TextInput label="Test" error="Error message" />);

    const input = screen.getByLabelText('Test');
    const description = screen.getByText('Error message');

    expect(input).toHaveAttribute('aria-describedby', description.id);
  });
});
