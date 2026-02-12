import { Root, Trigger, Portal, Content, Close } from '@radix-ui/react-popover';
import { forwardRef } from 'react';
import type { ElementRef, ComponentPropsWithoutRef, ReactNode } from 'react';

import { Icon } from './Icon';
import './Popover.css';

export interface PopoverProps extends Omit<
  ComponentPropsWithoutRef<typeof Content>,
  'children' | 'align' | 'side' | 'sideOffset'
> {
  children: ReactNode;
  closeButtonText: string;
  popoverTrigger: ReactNode;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  align?: 'center' | 'start' | 'end';
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
  className?: string;
}

const Popover = forwardRef<ElementRef<typeof Content>, PopoverProps>(
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
      <Root {...rootProps}>
        <Trigger asChild className="popover__trigger">
          {popoverTrigger}
        </Trigger>
        <Portal>
          <Content
            ref={ref}
            align={align}
            side={side}
            sideOffset={sideOffset}
            className={`popover__content ${className}`.trim()}
            {...props}
          >
            {children}
            <Close className="popover__close" aria-label={closeButtonText}>
              <Icon name="x" size="small" />
            </Close>
          </Content>
        </Portal>
      </Root>
    );
  }
);

Popover.displayName = 'Popover';

export { Popover };
