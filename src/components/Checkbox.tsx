import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import './Checkbox.css';
import { Icon } from './Icon';

export interface CheckboxProps extends React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
> {
  label?: string;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className = '', label, id, ...props }, ref) => {
  const checkboxId = id || React.useId();
  const checkboxClasses = `checkbox ${className}`.trim();

  return (
    <div className={checkboxClasses}>
      <CheckboxPrimitive.Root
        ref={ref}
        className="checkbox__checkbox"
        id={checkboxId}
        {...props}
      >
        <CheckboxPrimitive.Indicator className="checkbox__indicator">
          <Icon name="check" size="small" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {label && (
        <label className="checkbox__label" htmlFor={checkboxId}>
          {label}
        </label>
      )}
    </div>
  );
});

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
