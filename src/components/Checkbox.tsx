import { forwardRef, useId } from 'react';
import type { ElementRef, ComponentPropsWithoutRef } from 'react';
import { Root, Indicator } from '@radix-ui/react-checkbox';

import './Checkbox.css';
import { Icon } from './Icon';

export interface CheckboxProps extends ComponentPropsWithoutRef<typeof Root> {
  label?: string;
}

const Checkbox = forwardRef<ElementRef<typeof Root>, CheckboxProps>(
  ({ className = '', label, id, ...props }, ref) => {
    const checkboxId = id || useId();
    const checkboxClasses = `checkbox ${className}`.trim();

    return (
      <div className={checkboxClasses}>
        <Root
          ref={ref}
          className="checkbox__checkbox"
          id={checkboxId}
          {...props}
        >
          <Indicator className="checkbox__indicator">
            <Icon name="check" size="small" />
          </Indicator>
        </Root>
        {label && (
          <label className="checkbox__label" htmlFor={checkboxId}>
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = Root.displayName;

export { Checkbox };
