import { vi, expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Checkbox } from '../Checkbox';

describe('Checkbox', () => {
  it('renders with default props', () => {
    render(<Checkbox />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveClass('checkbox__checkbox');
    expect(checkbox).not.toBeChecked();
  });

  it('renders with label', () => {
    render(<Checkbox label="Accept terms" />);

    const checkbox = screen.getByRole('checkbox');
    const label = screen.getByText('Accept terms');

    expect(checkbox).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('checkbox__label');

    // Check that label is associated with checkbox
    expect(label).toHaveAttribute('for', checkbox.id);
  });

  it('renders without label when not provided', () => {
    render(<Checkbox />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();

    // Should not have any label text
    expect(screen.queryByText(/./)).not.toBeInTheDocument();
  });

  it('handles checked state', () => {
    const { rerender } = render(<Checkbox checked={false} />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    expect(checkbox).toHaveAttribute('data-state', 'unchecked');

    rerender(<Checkbox checked={true} />);
    expect(checkbox).toBeChecked();
    expect(checkbox).toHaveAttribute('data-state', 'checked');
  });

  it('handles disabled state', () => {
    render(<Checkbox disabled label="Disabled checkbox" />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeDisabled();
    expect(checkbox).toHaveAttribute('data-disabled');
  });

  it('handles change events', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<Checkbox onCheckedChange={handleChange} label="Click me" />);

    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);

    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('can be clicked via label', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<Checkbox onCheckedChange={handleChange} label="Click label" />);

    const label = screen.getByText('Click label');
    await user.click(label);

    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(<Checkbox ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('applies custom className', () => {
    const { container } = render(<Checkbox className="custom-checkbox" />);

    // Check that the container div has the custom class and default classes
    const checkboxContainer = container.querySelector('.checkbox');
    expect(checkboxContainer).toHaveClass('custom-checkbox', 'checkbox');
  });

  it('generates unique IDs for multiple checkboxes', () => {
    render(
      <>
        <Checkbox label="First" />
        <Checkbox label="Second" />
      </>
    );

    const firstCheckbox = screen.getByRole('checkbox', { name: /first/i });
    const secondCheckbox = screen.getByRole('checkbox', { name: /second/i });

    expect(firstCheckbox.id).toBeTruthy();
    expect(secondCheckbox.id).toBeTruthy();
    expect(firstCheckbox.id).not.toBe(secondCheckbox.id);
  });

  it('uses provided ID when specified', () => {
    render(<Checkbox id="custom-id" label="Custom ID" />);

    const checkbox = screen.getByRole('checkbox');
    const label = screen.getByText('Custom ID');

    expect(checkbox).toHaveAttribute('id', 'custom-id');
    expect(label).toHaveAttribute('for', 'custom-id');
  });

  it('passes through other Radix Checkbox props', () => {
    render(<Checkbox defaultChecked={true} />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
    // Radix Checkbox uses aria-checked for state, not the name attribute
    expect(checkbox).toHaveAttribute('aria-checked', 'true');
  });

  it('shows check icon when checked', () => {
    const { container } = render(<Checkbox checked={true} />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('data-state', 'checked');

    // Check that the indicator exists in the DOM
    const indicator = container.querySelector('.checkbox__indicator');
    expect(indicator).toBeInTheDocument();
  });

  it('handles unchecked state correctly', () => {
    render(<Checkbox checked={false} />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    expect(checkbox).toHaveAttribute('data-state', 'unchecked');
  });
});
