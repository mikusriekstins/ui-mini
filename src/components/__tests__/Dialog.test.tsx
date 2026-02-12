import { vi, expect, describe, it, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { Dialog } from '../Dialog';

describe('Dialog', () => {
  const defaultProps = {
    closeButtonText: 'Close dialog',
    onOpenChange: vi.fn(),
    trigger: <button>Open Dialog</button>,
    title: 'Dialog Title',
    description: 'Dialog Description',
    children: <div>Dialog content</div>,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders trigger button', () => {
    render(<Dialog {...defaultProps} />);

    const trigger = screen.getByRole('button', { name: /open dialog/i });
    expect(trigger).toBeInTheDocument();
  });

  it('opens dialog when trigger is clicked', async () => {
    const user = userEvent.setup();
    const handleOpenChange = vi.fn();

    render(<Dialog {...defaultProps} onOpenChange={handleOpenChange} />);

    const trigger = screen.getByRole('button', { name: /open dialog/i });
    await user.click(trigger);

    expect(handleOpenChange).toHaveBeenCalledWith(true);
  });

  it('renders dialog content when open', () => {
    render(<Dialog {...defaultProps} open={true} />);

    expect(screen.getByText('Dialog content')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /close dialog/i })
    ).toBeInTheDocument();
  });

  it('does not render dialog content when closed', () => {
    render(<Dialog {...defaultProps} open={false} />);

    expect(screen.queryByText('Dialog content')).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /close dialog/i })
    ).not.toBeInTheDocument();
  });

  it('closes dialog when close button is clicked', async () => {
    const user = userEvent.setup();
    const handleOpenChange = vi.fn();

    render(
      <Dialog {...defaultProps} open={true} onOpenChange={handleOpenChange} />
    );

    const closeButton = screen.getByRole('button', { name: /close dialog/i });
    await user.click(closeButton);

    expect(handleOpenChange).toHaveBeenCalledWith(false);
  });

  it('closes dialog when escape key is pressed', async () => {
    const user = userEvent.setup();
    const handleOpenChange = vi.fn();

    render(
      <Dialog {...defaultProps} open={true} onOpenChange={handleOpenChange} />
    );

    await user.keyboard('{Escape}');

    expect(handleOpenChange).toHaveBeenCalledWith(false);
  });

  it('applies custom className to content', () => {
    render(<Dialog {...defaultProps} open={true} className="custom-dialog" />);

    const content = screen.getByRole('dialog');
    expect(content).toHaveClass('dialog__content', 'custom-dialog');
  });

  it('forwards ref to dialog content', () => {
    const ref = { current: null };
    render(<Dialog {...defaultProps} open={true} ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  it('renders close button with correct aria-label', () => {
    const customCloseText = 'Custom close text';
    render(
      <Dialog {...defaultProps} open={true} closeButtonText={customCloseText} />
    );

    const closeButton = screen.getByRole('button', { name: customCloseText });
    expect(closeButton).toBeInTheDocument();
  });

  it('has correct dialog role and accessibility attributes', () => {
    render(<Dialog {...defaultProps} open={true} />);

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
  });

  it('trigger has correct class', () => {
    const { container } = render(<Dialog {...defaultProps} />);

    const trigger = container.querySelector('.dialog__trigger');
    expect(trigger).toBeInTheDocument();
  });

  it('close button has correct classes', () => {
    render(<Dialog {...defaultProps} open={true} />);

    const closeButton = screen.getByRole('button', { name: /close dialog/i });
    expect(closeButton).toHaveClass('dialog__close', 'dialog__close--absolute');
  });

  it('renders close icon', () => {
    render(<Dialog {...defaultProps} open={true} />);

    const closeButton = screen.getByRole('button', { name: /close dialog/i });
    const icon = closeButton.querySelector('.icon');
    expect(icon).toBeInTheDocument();
  });

  it('renders dialog title', () => {
    render(<Dialog {...defaultProps} open={true} />);

    expect(screen.getByText('Dialog Title')).toBeInTheDocument();
  });
});
