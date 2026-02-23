import type { TooltipProviderProps as RadixTooltipProviderProps } from '@radix-ui/react-tooltip';
import { createContext } from 'react';

export interface TooltipContextValue {
  delayDuration?: RadixTooltipProviderProps['delayDuration'];
  skipDelayDuration?: RadixTooltipProviderProps['skipDelayDuration'];
  disableHoverableContent?: RadixTooltipProviderProps['disableHoverableContent'];
}

export const TooltipContext = createContext<TooltipContextValue | undefined>(
  undefined
);
