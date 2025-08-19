import { vi, expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { RadioGroup, Radio } from '../Radio';

describe('RadioGroup', () => {
  it('renders with default props', () => {
    render(
      <RadioGroup>
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
      </RadioGroup>
    );

    const radiogroup = screen.getByRole('radiogroup');
    expect(radiogroup).toBeInTheDocument();
    expect(radiogroup).toHaveClass('radio-group');
  });

  it('applies custom className', () => {
    render(
      <RadioGroup className="custom-radio-group">
        <Radio value="option1" label="Option 1" />
      </RadioGroup>
    );

    const radiogroup = screen.getByRole('radiogroup');
    expect(radiogroup).toHaveClass('radio-group', 'custom-radio-group');
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(
      <RadioGroup ref={ref}>
        <Radio value="option1" label="Option 1" />
      </RadioGroup>
    );

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('handles value changes', async () => {
    const user = userEvent.setup();
    const handleValueChange = vi.fn();

    render(
      <RadioGroup onValueChange={handleValueChange}>
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
      </RadioGroup>
    );

    const radio1 = screen.getByRole('radio', { name: /option 1/i });
    await user.click(radio1);

    expect(handleValueChange).toHaveBeenCalledWith('option1');
  });

  it('allows only one radio to be selected at a time', async () => {
    const user = userEvent.setup();

    render(
      <RadioGroup defaultValue="option1">
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
        <Radio value="option3" label="Option 3" />
      </RadioGroup>
    );

    const radio1 = screen.getByRole('radio', { name: /option 1/i });
    const radio2 = screen.getByRole('radio', { name: /option 2/i });
    const radio3 = screen.getByRole('radio', { name: /option 3/i });

    // Initially option1 should be selected
    expect(radio1).toBeChecked();
    expect(radio2).not.toBeChecked();
    expect(radio3).not.toBeChecked();

    // Click option2
    await user.click(radio2);

    // Now only option2 should be selected
    expect(radio1).not.toBeChecked();
    expect(radio2).toBeChecked();
    expect(radio3).not.toBeChecked();
  });
});

describe('Radio', () => {
  it('renders with default props', () => {
    render(
      <RadioGroup>
        <Radio value="test" />
      </RadioGroup>
    );

    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
    expect(radio).toHaveAttribute('value', 'test');
  });

  it('renders with label', () => {
    render(
      <RadioGroup>
        <Radio value="test" label="Test Radio" />
      </RadioGroup>
    );

    const radio = screen.getByRole('radio', { name: /test radio/i });
    expect(radio).toBeInTheDocument();

    const label = screen.getByText('Test Radio');
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', radio.id);
  });

  it('renders without label', () => {
    render(
      <RadioGroup>
        <Radio value="test" />
      </RadioGroup>
    );

    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();

    const radioContainer = radio.closest('.radio');
    expect(radioContainer).toBeInTheDocument();

    const labelElement = radioContainer?.querySelector('.radio__label');
    expect(labelElement).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <RadioGroup>
        <Radio value="test" className="custom-radio" label="Test" />
      </RadioGroup>
    );

    const radio = screen.getByRole('radio', { name: /test/i });
    const radioContainer = radio.closest('.radio');
    expect(radioContainer).toBeInTheDocument();
    expect(radioContainer).toHaveClass('radio', 'custom-radio');
  });

  it('uses custom id when provided', () => {
    render(
      <RadioGroup>
        <Radio value="test" id="custom-id" label="Test Radio" />
      </RadioGroup>
    );

    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('id', 'custom-id');

    const label = screen.getByText('Test Radio');
    expect(label).toHaveAttribute('for', 'custom-id');
  });

  it('generates unique id when not provided', () => {
    render(
      <RadioGroup>
        <Radio value="test1" label="Test Radio 1" />
        <Radio value="test2" label="Test Radio 2" />
      </RadioGroup>
    );

    const radio1 = screen.getByRole('radio', { name: /test radio 1/i });
    const radio2 = screen.getByRole('radio', { name: /test radio 2/i });

    expect(radio1.id).toBeTruthy();
    expect(radio2.id).toBeTruthy();
    expect(radio1.id).not.toBe(radio2.id);
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(
      <RadioGroup>
        <Radio ref={ref} value="test" label="Test Radio" />
      </RadioGroup>
    );

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('passes through other HTML attributes', () => {
    render(
      <RadioGroup>
        <Radio
          value="test"
          label="Test Radio"
          data-testid="custom-radio"
          aria-describedby="description"
        />
      </RadioGroup>
    );

    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('data-testid', 'custom-radio');
    expect(radio).toHaveAttribute('aria-describedby', 'description');
  });

  it('has proper radio item structure', () => {
    render(
      <RadioGroup>
        <Radio value="test" label="Test Radio" />
      </RadioGroup>
    );

    const radio = screen.getByRole('radio');
    expect(radio).toHaveClass('radio__item');

    const radioContainer = radio.closest('.radio');
    expect(radioContainer).toBeInTheDocument();

    // Verify the basic structure without making assumptions about internal DOM
    expect(radioContainer).toHaveClass('radio');
  });

  it('can be disabled', () => {
    render(
      <RadioGroup>
        <Radio value="test" label="Test Radio" disabled />
      </RadioGroup>
    );

    const radio = screen.getByRole('radio');
    expect(radio).toBeDisabled();
  });

  it('handles click events within RadioGroup', async () => {
    const user = userEvent.setup();
    const handleValueChange = vi.fn();

    render(
      <RadioGroup onValueChange={handleValueChange}>
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
      </RadioGroup>
    );

    const radio1 = screen.getByRole('radio', { name: /option 1/i });
    const radio2 = screen.getByRole('radio', { name: /option 2/i });

    await user.click(radio1);
    expect(handleValueChange).toHaveBeenCalledWith('option1');
    expect(radio1).toBeChecked();

    await user.click(radio2);
    expect(handleValueChange).toHaveBeenCalledWith('option2');
    expect(radio2).toBeChecked();
    expect(radio1).not.toBeChecked();
  });
});
