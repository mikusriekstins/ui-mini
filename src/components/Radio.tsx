import { Root, Item, Indicator } from '@radix-ui/react-radio-group';
import { forwardRef, useId } from 'react';
import type { ComponentRef, ComponentPropsWithoutRef } from 'react';
import './Radio.css';

export type RadioGroupProps = ComponentPropsWithoutRef<typeof Root>;

export interface RadioProps extends ComponentPropsWithoutRef<typeof Item> {
  label?: string;
}

const RadioGroup = forwardRef<ComponentRef<typeof Root>, RadioGroupProps>(
  ({ className = '', ...props }, ref) => {
    const radioGroupClasses = `radio-group ${className}`.trim();

    return <Root ref={ref} className={radioGroupClasses} {...props} />;
  }
);

const Radio = forwardRef<ComponentRef<typeof Item>, RadioProps>(
  ({ className = '', label, id, ...props }, ref) => {
    const useIdValue = useId();
    const radioId = id ?? useIdValue;
    const radioClasses = `radio ${className}`.trim();

    return (
      <div className={radioClasses}>
        <Item ref={ref} className="radio__item" id={radioId} {...props}>
          <Indicator className="radio__indicator" />
        </Item>
        {label != null && label !== '' && (
          <label className="radio__label" htmlFor={radioId}>
            {label}
          </label>
        )}
      </div>
    );
  }
);

RadioGroup.displayName = Root.displayName;
Radio.displayName = Item.displayName;

export { RadioGroup, Radio };
