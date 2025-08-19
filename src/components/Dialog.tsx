import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Icon } from './Icon';
import './Dialog.css';

export interface DialogProps {
  children: React.ReactNode;
  closeButtonText: string;
  trigger: React.ReactNode;
  title: string;
  description?: string;
  open?: boolean;
  onOpenChange: (open: boolean) => void;
  className?: string;
}

const Dialog = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogProps
>(
  (
    {
      children,
      closeButtonText,
      trigger,
      title,
      description,
      open,
      onOpenChange,
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
        <DialogPrimitive.Trigger asChild className="dialog__trigger">
          {trigger}
        </DialogPrimitive.Trigger>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="dialog__overlay" />
          <DialogPrimitive.Content
            ref={ref}
            className={`dialog__content ${className}`.trim()}
            {...props}
          >
            <DialogPrimitive.Title className="dialog__title">
              {title}
            </DialogPrimitive.Title>
            {description && (
              <DialogPrimitive.Description className="dialog__description">
                {description}
              </DialogPrimitive.Description>
            )}
            {children}
            <DialogPrimitive.Close
              className="dialog__close dialog__close--absolute"
              aria-label={closeButtonText}
            >
              <Icon name="x" size="small" />
            </DialogPrimitive.Close>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    );
  }
);

Dialog.displayName = 'Dialog';

export { Dialog };
