import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Icon } from '../Icon';

describe('Icon', () => {
  it('renders with default props', () => {
    render(<Icon name="x" data-testid="icon" />);

    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('icon', 'icon--medium');
  });

  it('renders with small size', () => {
    render(<Icon name="x" size="small" data-testid="icon" />);

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveClass('icon--small');
  });

  it('renders different icon types', () => {
    const { rerender } = render(<Icon name="arrow-left" data-testid="icon" />);

    let icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();

    rerender(<Icon name="arrow-up" data-testid="icon" />);
    icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();

    rerender(<Icon name="arrow-right" data-testid="icon" />);
    icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();

    rerender(<Icon name="arrow-down" data-testid="icon" />);
    icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Icon name="x" className="custom-icon" data-testid="icon" />);

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveClass('custom-icon', 'icon', 'icon--medium');
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(<Icon name="x" ref={ref} />);

    expect(ref.current).toBeInstanceOf(SVGSVGElement);
  });

  it('passes through other Lucide props', () => {
    render(<Icon name="x" data-testid="icon" id="custom-id" />);

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveAttribute('id', 'custom-id');
  });

  it('renders as SVG element', () => {
    render(<Icon name="x" data-testid="icon" />);

    const icon = screen.getByTestId('icon');
    expect(icon.tagName.toLowerCase()).toBe('svg');
  });

  it('handles all available icon names', () => {
    const iconNames = [
      'arrow-left',
      'arrow-up',
      'arrow-right',
      'arrow-down',
      'x',
      'edit',
      'delete',
      'search',
      'add',
      'settings',
      'user',
      'home',
      'save',
      'upload',
      'file-down',
      'error',
      'warning',
      'success',
    ] as const;

    iconNames.forEach((iconName) => {
      const { unmount } = render(
        <Icon name={iconName} data-testid={`icon-${iconName}`} />
      );

      const icon = screen.getByTestId(`icon-${iconName}`);
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveClass('icon');

      unmount();
    });
  });

  it('has correct default size', () => {
    render(<Icon name="x" data-testid="icon" />);

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveClass('icon--medium');
    expect(icon).not.toHaveClass('icon--small');
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(
      <Icon name="x" size="small" data-testid="icon" />
    );

    let icon = screen.getByTestId('icon');
    expect(icon).toHaveClass('icon--small');
    expect(icon).not.toHaveClass('icon--medium');

    rerender(<Icon name="x" size="medium" data-testid="icon" />);
    icon = screen.getByTestId('icon');
    expect(icon).toHaveClass('icon--medium');
    expect(icon).not.toHaveClass('icon--small');
  });
});
