import { Root, Trigger, Portal, Content, Arrow } from '@radix-ui/react-tooltip';
import { forwardRef } from 'react';
import type { ComponentRef, ReactNode } from 'react';

import './Tooltip.css';

export interface TooltipProps {
  /** Content to display in the tooltip */
  content: ReactNode;
  /** Element that triggers the tooltip on hover/focus */
  trigger: ReactNode;
  /** Custom class name for content element */
  className?: string;
}

const Tooltip = forwardRef<ComponentRef<typeof Content>, TooltipProps>(
  ({ content, trigger, className = '' }, ref) => {
    return (
      <Root defaultOpen>
        <Trigger asChild>{trigger}</Trigger>
        <Portal>
          <Content ref={ref} className={`tooltip__content ${className}`.trim()}>
            {content}
            <Arrow className="tooltip__arrow" />
          </Content>
        </Portal>
      </Root>
    );
  }
);

Tooltip.displayName = 'Tooltip';

export { Tooltip };
