import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
  Close,
} from '@radix-ui/react-dialog';
import { forwardRef } from 'react';
import type { ElementRef, ReactNode } from 'react';

import { Icon } from './Icon';
import './Dialog.css';

export interface DialogProps {
  children: ReactNode;
  closeButtonText: string;
  trigger: ReactNode;
  title: string;
  description?: string;
  open?: boolean;
  onOpenChange: (open: boolean) => void;
  className?: string;
}

const Dialog = forwardRef<ElementRef<typeof Content>, DialogProps>(
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
      <Root open={open} onOpenChange={onOpenChange}>
        <Trigger asChild className="dialog__trigger">
          {trigger}
        </Trigger>
        <Portal>
          <Overlay className="dialog__overlay" />
          <Content
            ref={ref}
            className={`dialog__content ${className}`.trim()}
            {...props}
          >
            <Title className="dialog__title">{title}</Title>
            {description && (
              <Description className="dialog__description">
                {description}
              </Description>
            )}
            {children}
            <Close
              className="dialog__close dialog__close--absolute"
              aria-label={closeButtonText}
            >
              <Icon name="x" size="small" />
            </Close>
          </Content>
        </Portal>
      </Root>
    );
  }
);

Dialog.displayName = 'Dialog';

export { Dialog };
