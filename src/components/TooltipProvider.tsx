import { Provider } from '@radix-ui/react-tooltip';
import { useMemo, ReactNode } from 'react';

import { TooltipContext, TooltipContextValue } from '../context/TooltipContext';

export interface TooltipProviderProps extends TooltipContextValue {
  children: ReactNode;
}

export function TooltipProvider({
  children,
  delayDuration,
  skipDelayDuration,
  disableHoverableContent,
}: TooltipProviderProps): ReactNode {
  const value = useMemo(
    () => ({
      delayDuration,
      skipDelayDuration,
      disableHoverableContent,
    }),
    [delayDuration, skipDelayDuration, disableHoverableContent]
  );

  return (
    <Provider
      delayDuration={delayDuration}
      skipDelayDuration={skipDelayDuration}
      disableHoverableContent={disableHoverableContent}
    >
      <TooltipContext.Provider value={value}>
        {children}
      </TooltipContext.Provider>
    </Provider>
  );
}

TooltipProvider.displayName = 'TooltipProvider';
