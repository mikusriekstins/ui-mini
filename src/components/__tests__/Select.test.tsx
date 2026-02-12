import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Select, type SelectOption } from '../Select';

const mockOptions: SelectOption[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
];

describe('Select', () => {
  it('renders with default props', () => {
    render(<Select options={mockOptions} />);

    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
    expect(select).toHaveClass('select__trigger');
  });

  it('renders with placeholder', () => {
    render(<Select options={mockOptions} placeholder="Choose a fruit" />);

    const select = screen.getByRole('combobox');
    expect(select).toHaveTextContent('Choose a fruit');
  });

  it('renders with default value', () => {
    render(<Select options={mockOptions} defaultValue="banana" />);

    const select = screen.getByRole('combobox');
    expect(select).toHaveTextContent('Banana');
  });

  it('can be disabled', () => {
    render(<Select options={mockOptions} disabled />);

    const select = screen.getByRole('combobox');
    expect(select).toBeDisabled();
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(<Select ref={ref} options={mockOptions} />);

    expect(ref.current).toBeTruthy();
  });

  it('applies custom className', () => {
    render(<Select options={mockOptions} className="custom-class" />);

    const select = screen.getByRole('combobox');
    expect(select).toHaveClass('custom-class', 'select__trigger');
  });

  it('renders chevron down icon', () => {
    render(<Select options={mockOptions} />);

    const icon = document.querySelector('.select__icon svg');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('lucide-chevron-down');
  });

  it('handles controlled value', () => {
    const { rerender } = render(<Select options={mockOptions} value="apple" />);

    let select = screen.getByRole('combobox');
    expect(select).toHaveTextContent('Apple');

    rerender(<Select options={mockOptions} value="banana" />);

    select = screen.getByRole('combobox');
    expect(select).toHaveTextContent('Banana');
  });
});
