import { Root } from '@radix-ui/react-toggle';
import { forwardRef, ComponentPropsWithoutRef, ComponentRef } from 'react';
import './Toggle.css';

export interface ToggleProps extends ComponentPropsWithoutRef<typeof Root> {
  variant?: 'primary' | 'secondary';
}

const Toggle = forwardRef<ComponentRef<typeof Root>, ToggleProps>(
  ({ className = '', variant = 'primary', ...props }, ref) => {
    const toggleClasses =
      `toggle ${variant === 'secondary' ? 'toggle--secondary' : ''} ${className}`.trim();

    return <Root ref={ref} className={toggleClasses} {...props} />;
  }
);

Toggle.displayName = Root.displayName;

export { Toggle };
