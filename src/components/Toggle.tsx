import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import './Toggle.css';

export interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> {
  variant?: 'primary' | 'secondary';
}

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(({ className = '', variant = 'primary', ...props }, ref) => {
  const toggleClasses =
    `toggle ${variant === 'secondary' ? 'toggle--secondary' : ''} ${className}`.trim();

  return (
    <TogglePrimitive.Root ref={ref} className={toggleClasses} {...props} />
  );
});

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle };
