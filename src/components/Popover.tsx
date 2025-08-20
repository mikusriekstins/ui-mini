import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { Icon } from './Icon';
import './Popover.css';

export interface PopoverProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>,
    'children' | 'align' | 'side' | 'sideOffset'
  > {
  children: React.ReactNode;
  closeButtonText: string;
  popoverTrigger: React.ReactNode;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  align?: 'center' | 'start' | 'end';
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
  className?: string;
}

const Popover = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverProps
>(
  (
    {
      children,
      closeButtonText,
      popoverTrigger,
      isOpen,
      onOpenChange,
      align = 'center',
      side = 'bottom',
      sideOffset = 4,
      className = '',
      ...props
    },
    ref
  ) => {
    const rootProps = {
      ...(isOpen !== undefined && { open: isOpen }),
      ...(onOpenChange !== undefined && { onOpenChange }),
    };

    return (
      <PopoverPrimitive.Root {...rootProps}>
        <PopoverPrimitive.Trigger asChild className="popover__trigger">
          {popoverTrigger}
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            ref={ref}
            align={align}
            side={side}
            sideOffset={sideOffset}
            className={`popover__content ${className}`.trim()}
            {...props}
          >
            {children}
            <PopoverPrimitive.Close
              className="popover__close"
              aria-label={closeButtonText}
            >
              <Icon name="x" size="small" />
            </PopoverPrimitive.Close>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    );
  }
);

Popover.displayName = 'Popover';

export { Popover };
