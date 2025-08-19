import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import './Radio.css';

export type RadioGroupProps = React.ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Root
>;

export interface RadioProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label?: string;
}

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className = '', ...props }, ref) => {
  const radioGroupClasses = `radio-group ${className}`.trim();

  return (
    <RadioGroupPrimitive.Root
      ref={ref}
      className={radioGroupClasses}
      {...props}
    />
  );
});

const Radio = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioProps
>(({ className = '', label, id, ...props }, ref) => {
  const radioId = id || React.useId();
  const radioClasses = `radio ${className}`.trim();

  return (
    <div className={radioClasses}>
      <RadioGroupPrimitive.Item
        ref={ref}
        className="radio__item"
        id={radioId}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="radio__indicator" />
      </RadioGroupPrimitive.Item>
      {label && (
        <label className="radio__label" htmlFor={radioId}>
          {label}
        </label>
      )}
    </div>
  );
});

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
Radio.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, Radio };
