import { vi, expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Button } from '../Button';

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('button', 'button--primary');
  });

  it('renders with secondary variant', () => {
    render(<Button variant="secondary">Secondary Button</Button>);

    const button = screen.getByRole('button', { name: /secondary button/i });
    expect(button).toHaveClass('button--secondary');
  });

  it('renders with icon', () => {
    render(<Button icon="x">Add Item</Button>);

    const button = screen.getByRole('button', { name: /add item/i });
    expect(button).toBeInTheDocument();

    const iconElement = button.querySelector('.button__icon');
    expect(iconElement).toBeInTheDocument();

    const textElement = button.querySelector('.button__text');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent('Add Item');
  });

  it('renders icon only button', () => {
    render(<Button icon="x" aria-label="Add item" />);

    const button = screen.getByRole('button', { name: /add item/i });
    expect(button).toBeInTheDocument();

    const iconElement = button.querySelector('.button__icon');
    expect(iconElement).toBeInTheDocument();

    const textElement = button.querySelector('.button__text');
    expect(textElement).not.toBeInTheDocument();
  });

  it('handles click events', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('can be disabled', () => {
    render(<Button disabled>Disabled Button</Button>);

    const button = screen.getByRole('button', { name: /disabled button/i });
    expect(button).toBeDisabled();
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(<Button ref={ref}>Button with ref</Button>);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom Button</Button>);

    const button = screen.getByRole('button', { name: /custom button/i });
    expect(button).toHaveClass('custom-class', 'button', 'button--primary');
  });

  it('passes through other HTML button attributes', () => {
    render(
      <Button type="submit" id="submit-btn">
        Submit
      </Button>
    );

    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toHaveAttribute('type', 'submit');
    expect(button).toHaveAttribute('id', 'submit-btn');
  });
});
