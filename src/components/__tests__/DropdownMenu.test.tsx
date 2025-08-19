import * as React from 'react';
import { vi, expect, describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '../DropdownMenu';

describe('DropdownMenu', () => {
  const defaultProps = {
    trigger: <button>Open Menu</button>,
    children: (
      <>
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Item 2</DropdownMenuItem>
      </>
    ),
  };

  it('renders trigger button', () => {
    render(<DropdownMenu {...defaultProps} />);

    const trigger = screen.getByRole('button', { name: /open menu/i });
    expect(trigger).toBeInTheDocument();
  });

  it('opens menu when trigger is clicked', async () => {
    const user = userEvent.setup();
    render(<DropdownMenu {...defaultProps} />);

    const trigger = screen.getByRole('button', { name: /open menu/i });
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument();
    });
  });

  it('renders menu items when open', async () => {
    const user = userEvent.setup();
    render(<DropdownMenu {...defaultProps} />);

    const trigger = screen.getByRole('button', { name: /open menu/i });
    await user.click(trigger);

    await waitFor(() => {
      expect(
        screen.getByRole('menuitem', { name: /item 1/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('menuitem', { name: /item 2/i })
      ).toBeInTheDocument();
    });
  });

  it('renders label when provided', async () => {
    const user = userEvent.setup();
    render(<DropdownMenu {...defaultProps} label="Menu Label" />);

    const trigger = screen.getByRole('button', { name: /open menu/i });
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText('Menu Label')).toBeInTheDocument();
    });
  });

  it('does not render label when not provided', async () => {
    const user = userEvent.setup();
    render(<DropdownMenu {...defaultProps} />);

    const trigger = screen.getByRole('button', { name: /open menu/i });
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument();
    });

    expect(screen.queryByText('Menu Label')).not.toBeInTheDocument();
  });

  it('closes menu when item is selected', async () => {
    const user = userEvent.setup();
    render(<DropdownMenu {...defaultProps} />);

    const trigger = screen.getByRole('button', { name: /open menu/i });
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument();
    });

    const menuItem = screen.getByRole('menuitem', { name: /item 1/i });
    await user.click(menuItem);

    await waitFor(() => {
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });
  });

  it('closes menu when escape is pressed', async () => {
    const user = userEvent.setup();
    render(<DropdownMenu {...defaultProps} />);

    const trigger = screen.getByRole('button', { name: /open menu/i });
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument();
    });

    await user.keyboard('{Escape}');

    await waitFor(() => {
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });
  });

  it('renders two separators with label', async () => {
    const user = userEvent.setup();
    render(<DropdownMenu {...defaultProps} label="Test Label" />);

    const trigger = screen.getByRole('button', { name: /open menu/i });
    await user.click(trigger);

    await waitFor(() => {
      const label = screen.getByText('Test Label');
      const separators = screen.queryAllByRole('separator');
      expect(label).toBeInTheDocument();
      expect(separators.length).toBe(2);
    });
  });
});

describe('DropdownMenuItem', () => {
  const renderWithMenu = (children: React.ReactNode) => {
    return render(
      <DropdownMenu trigger={<button>Trigger</button>}>{children}</DropdownMenu>
    );
  };

  it('renders correctly within menu', async () => {
    const user = userEvent.setup();
    renderWithMenu(<DropdownMenuItem>Test Item</DropdownMenuItem>);

    const trigger = screen.getByRole('button', { name: /trigger/i });
    await user.click(trigger);

    await waitFor(() => {
      const item = screen.getByRole('menuitem', { name: /test item/i });
      expect(item).toBeInTheDocument();
    });
  });

  it('calls onClick when clicked within menu', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    renderWithMenu(
      <DropdownMenuItem onClick={handleClick}>Clickable Item</DropdownMenuItem>
    );

    const trigger = screen.getByRole('button', { name: /trigger/i });
    await user.click(trigger);

    await waitFor(() => {
      const item = screen.getByRole('menuitem', { name: /clickable item/i });
      expect(item).toBeInTheDocument();
    });

    const item = screen.getByRole('menuitem', { name: /clickable item/i });
    await user.click(item);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('can be disabled within menu', async () => {
    const user = userEvent.setup();
    renderWithMenu(<DropdownMenuItem disabled>Disabled Item</DropdownMenuItem>);

    const trigger = screen.getByRole('button', { name: /trigger/i });
    await user.click(trigger);

    await waitFor(() => {
      const item = screen.getByRole('menuitem', { name: /disabled item/i });
      expect(item).toBeInTheDocument();
      expect(item).toHaveAttribute('data-disabled');
    });
  });

  it('applies custom className within menu', async () => {
    const user = userEvent.setup();
    renderWithMenu(
      <DropdownMenuItem className="custom-item">Custom Item</DropdownMenuItem>
    );

    const trigger = screen.getByRole('button', { name: /trigger/i });
    await user.click(trigger);

    await waitFor(() => {
      const item = screen.getByRole('menuitem', { name: /custom item/i });
      expect(item).toHaveClass('dropdown-menu__item', 'custom-item');
    });
  });

  it('forwards ref correctly within menu', async () => {
    const user = userEvent.setup();
    const ref = { current: null };
    renderWithMenu(
      <DropdownMenuItem ref={ref}>Item with ref</DropdownMenuItem>
    );

    const trigger = screen.getByRole('button', { name: /trigger/i });
    await user.click(trigger);

    await waitFor(() => {
      expect(ref.current).toBeInstanceOf(HTMLElement);
    });
  });
});

describe('DropdownMenuSeparator', () => {
  it('renders correctly', () => {
    const { container } = render(<DropdownMenuSeparator />);

    const separator = container.querySelector('.dropdown-menu__separator');
    expect(separator).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <DropdownMenuSeparator className="custom-separator" />
    );

    const separator = container.querySelector(
      '.dropdown-menu__separator.custom-separator'
    );
    expect(separator).toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(<DropdownMenuSeparator ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});
