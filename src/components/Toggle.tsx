import { Root } from '@radix-ui/react-toggle';
import { forwardRef, ComponentPropsWithoutRef, ComponentRef } from 'react';
import './Toggle.css';

export type ToggleProps = ComponentPropsWithoutRef<typeof Root>;

const Toggle = forwardRef<ComponentRef<typeof Root>, ToggleProps>(
  ({ className = '', ...props }, ref) => {
    const toggleClasses = `toggle ${className}`.trim();

    return <Root ref={ref} className={toggleClasses} {...props} />;
  }
);

Toggle.displayName = Root.displayName;

export { Toggle };
