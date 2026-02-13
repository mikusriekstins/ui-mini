import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { vi, expect, describe, it, beforeEach } from 'vitest';

import { Popover } from '../Popover';

describe('Popover', () => {
  const defaultProps = {
    closeButtonText: 'Close popover',
    onOpenChange: vi.fn(),
    popoverTrigger: <button>Open Popover</button>,
    children: <div>Popover content</div>,
    isOpen: false,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders trigger button', () => {
    render(<Popover {...defaultProps} />);

    const trigger = screen.getByRole('button', { name: /open popover/i });
    expect(trigger).toBeInTheDocument();
  });

  it('opens popover when trigger is clicked', async () => {
    const user = userEvent.setup();
    const handleOpenChange = vi.fn();

    render(<Popover {...defaultProps} onOpenChange={handleOpenChange} />);

    const trigger = screen.getByRole('button', { name: /open popover/i });
    await user.click(trigger);

    expect(handleOpenChange).toHaveBeenCalledWith(true);
  });

  it('renders popover content when open', () => {
    render(<Popover {...defaultProps} isOpen={true} />);

    expect(screen.getByText('Popover content')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /close popover/i })
    ).toBeInTheDocument();
  });

  it('does not render popover content when closed', () => {
    render(<Popover {...defaultProps} isOpen={false} />);

    expect(screen.queryByText('Popover content')).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /close popover/i })
    ).not.toBeInTheDocument();
  });

  it('closes popover when close button is clicked', async () => {
    const user = userEvent.setup();
    const handleOpenChange = vi.fn();

    render(
      <Popover
        {...defaultProps}
        isOpen={true}
        onOpenChange={handleOpenChange}
      />
    );

    const closeButton = screen.getByRole('button', { name: /close popover/i });
    await user.click(closeButton);

    expect(handleOpenChange).toHaveBeenCalledWith(false);
  });

  it('closes popover when escape key is pressed', async () => {
    const user = userEvent.setup();
    const handleOpenChange = vi.fn();

    render(
      <Popover
        {...defaultProps}
        isOpen={true}
        onOpenChange={handleOpenChange}
      />
    );

    await user.keyboard('{Escape}');

    expect(handleOpenChange).toHaveBeenCalledWith(false);
  });

  it('forwards ref to popover content', () => {
    const ref = { current: null };
    render(<Popover {...defaultProps} isOpen={true} ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  it('renders close button with correct aria-label', () => {
    const customCloseText = 'Custom close text';
    render(
      <Popover
        {...defaultProps}
        isOpen={true}
        closeButtonText={customCloseText}
      />
    );

    const closeButton = screen.getByRole('button', { name: customCloseText });
    expect(closeButton).toBeInTheDocument();
  });

  it('applies custom positioning props', () => {
    render(
      <Popover
        {...defaultProps}
        isOpen={true}
        align="start"
        side="top"
        sideOffset={10}
      />
    );

    expect(screen.getByText('Popover content')).toBeInTheDocument();
  });

  it('trigger has correct class', () => {
    const { container } = render(<Popover {...defaultProps} />);

    const trigger = container.querySelector('.popover__trigger');
    expect(trigger).toBeInTheDocument();
  });

  it('close button has correct class', () => {
    render(<Popover {...defaultProps} isOpen={true} />);

    const closeButton = screen.getByRole('button', { name: /close popover/i });
    expect(closeButton).toHaveClass('popover__close');
  });

  it('renders close icon', () => {
    render(<Popover {...defaultProps} isOpen={true} />);

    const closeButton = screen.getByRole('button', { name: /close popover/i });
    const icon = closeButton.querySelector('.icon');
    expect(icon).toBeInTheDocument();
  });

  it('handles controlled state changes', () => {
    const { rerender } = render(<Popover {...defaultProps} isOpen={false} />);

    expect(screen.queryByText('Popover content')).not.toBeInTheDocument();

    rerender(<Popover {...defaultProps} isOpen={true} />);
    expect(screen.getByText('Popover content')).toBeInTheDocument();
  });

  it('passes through other props to content', () => {
    render(<Popover {...defaultProps} isOpen={true} id="custom-popover" />);

    const content = screen
      .getByText('Popover content')
      .closest('[id="custom-popover"]');
    expect(content).toBeInTheDocument();
  });

  describe('uncontrolled mode', () => {
    const uncontrolledProps = {
      closeButtonText: 'Close popover',
      popoverTrigger: <button>Open Popover</button>,
      children: <div>Popover content</div>,
    };

    it('works without isOpen and onOpenChange props', () => {
      render(<Popover {...uncontrolledProps} />);

      const trigger = screen.getByRole('button', { name: /open popover/i });
      expect(trigger).toBeInTheDocument();
      expect(screen.queryByText('Popover content')).not.toBeInTheDocument();
    });

    it('can be opened and closed in uncontrolled mode', async () => {
      const user = userEvent.setup();
      render(<Popover {...uncontrolledProps} />);

      const trigger = screen.getByRole('button', { name: /open popover/i });

      await user.click(trigger);
      expect(screen.getByText('Popover content')).toBeInTheDocument();

      const closeButton = screen.getByRole('button', {
        name: /close popover/i,
      });
      await user.click(closeButton);
      expect(screen.queryByText('Popover content')).not.toBeInTheDocument();
    });

    it('can be closed with escape key in uncontrolled mode', async () => {
      const user = userEvent.setup();
      render(<Popover {...uncontrolledProps} />);

      const trigger = screen.getByRole('button', { name: /open popover/i });
      await user.click(trigger);
      expect(screen.getByText('Popover content')).toBeInTheDocument();

      await user.keyboard('{Escape}');
      expect(screen.queryByText('Popover content')).not.toBeInTheDocument();
    });
  });
});
