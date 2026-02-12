import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { vi, expect, describe, it } from 'vitest';

import { Toggle } from '../Toggle';

describe('Toggle', () => {
  it('renders with default props', () => {
    render(<Toggle>Toggle Button</Toggle>);

    const toggle = screen.getByRole('button', { name: /toggle button/i });
    expect(toggle).toBeInTheDocument();
    expect(toggle).toHaveClass('toggle');
    expect(toggle).not.toHaveClass('toggle--secondary');
  });

  it('renders with secondary variant', () => {
    render(<Toggle variant="secondary">Secondary Toggle</Toggle>);

    const toggle = screen.getByRole('button', { name: /secondary toggle/i });
    expect(toggle).toHaveClass('toggle', 'toggle--secondary');
  });

  it('handles toggle state changes', async () => {
    const user = userEvent.setup();
    const handleToggle = vi.fn();

    render(<Toggle onPressedChange={handleToggle}>Toggle me</Toggle>);

    const toggle = screen.getByRole('button', { name: /toggle me/i });
    expect(toggle).toHaveAttribute('aria-pressed', 'false');

    await user.click(toggle);
    expect(handleToggle).toHaveBeenCalledWith(true);
  });

  it('can be controlled', () => {
    const { rerender } = render(
      <Toggle pressed={false}>Controlled Toggle</Toggle>
    );

    const toggle = screen.getByRole('button', { name: /controlled toggle/i });
    expect(toggle).toHaveAttribute('aria-pressed', 'false');

    rerender(<Toggle pressed={true}>Controlled Toggle</Toggle>);
    expect(toggle).toHaveAttribute('aria-pressed', 'true');
  });

  it('can be disabled', () => {
    render(<Toggle disabled>Disabled Toggle</Toggle>);

    const toggle = screen.getByRole('button', { name: /disabled toggle/i });
    expect(toggle).toBeDisabled();
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(<Toggle ref={ref}>Toggle with ref</Toggle>);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('applies custom className', () => {
    render(<Toggle className="custom-toggle">Custom Toggle</Toggle>);

    const toggle = screen.getByRole('button', { name: /custom toggle/i });
    expect(toggle).toHaveClass('custom-toggle', 'toggle');
  });

  it('passes through other Radix Toggle props', () => {
    render(
      <Toggle defaultPressed={true} id="my-toggle">
        Default Pressed
      </Toggle>
    );

    const toggle = screen.getByRole('button', { name: /default pressed/i });
    expect(toggle).toHaveAttribute('id', 'my-toggle');
    expect(toggle).toHaveAttribute('aria-pressed', 'true');
  });

  /*
  it('handles keyboard interactions', async () => {
    const user = userEvent.setup();
    const handleToggle = vi.fn();
    
    render(<Toggle onPressedChange={handleToggle}>Keyboard Toggle</Toggle>);
    
    const toggle = screen.getByRole('button', { name: /keyboard toggle/i });
    toggle.focus();
    
    await user.keyboard('{Space}');
    expect(handleToggle).toHaveBeenCalledWith(true);
    
    await user.keyboard('{Enter}');
    expect(handleToggle).toHaveBeenCalledWith(false);
  });
  */
});
