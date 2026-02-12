import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Label } from '../Label';

describe('Label', () => {
  it('renders with text prop', () => {
    render(<Label text="Username" />);

    const label = screen.getByText('Username');
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('label');
  });

  it('renders with htmlFor prop', () => {
    render(<Label text="Email" htmlFor="email-input" />);

    const label = screen.getByText('Email');
    expect(label).toHaveAttribute('for', 'email-input');
  });

  it('renders required indicator when isRequired is true', () => {
    render(<Label text="Password" isRequired />);

    const label = screen.getByText('Password');
    const requiredIndicator = screen.getByText('*');

    expect(label).toBeInTheDocument();
    expect(requiredIndicator).toBeInTheDocument();
    expect(requiredIndicator).toHaveClass('label__required');
    expect(requiredIndicator).toHaveAttribute('aria-label', 'required');
  });

  it('does not render required indicator when isRequired is false', () => {
    render(<Label text="Optional Field" isRequired={false} />);

    const label = screen.getByText('Optional Field');
    const requiredIndicator = screen.queryByText('*');

    expect(label).toBeInTheDocument();
    expect(requiredIndicator).not.toBeInTheDocument();
  });

  it('does not render required indicator by default', () => {
    render(<Label text="Default Field" />);

    const label = screen.getByText('Default Field');
    const requiredIndicator = screen.queryByText('*');

    expect(label).toBeInTheDocument();
    expect(requiredIndicator).not.toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(<Label ref={ref} text="Label with ref" />);

    expect(ref.current).toBeTruthy();
  });

  it('applies custom className', () => {
    render(<Label text="Custom Label" className="custom-class" />);

    const label = screen.getByText('Custom Label');
    expect(label).toHaveClass('custom-class', 'label');
  });

  it('passes through other HTML label attributes', () => {
    render(
      <Label
        text="Accessible Label"
        id="custom-label"
        data-testid="label-test"
      />
    );

    const label = screen.getByText('Accessible Label');
    expect(label).toHaveAttribute('id', 'custom-label');
    expect(label).toHaveAttribute('data-testid', 'label-test');
  });
});
