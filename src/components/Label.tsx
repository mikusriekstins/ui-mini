import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import './Label.css';

export interface LabelProps extends React.ComponentPropsWithoutRef<
  typeof LabelPrimitive.Root
> {
  text: string;
  isRequired?: boolean;
}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className = '', text, isRequired = false, ...props }, ref) => {
  const labelClasses = `label ${className}`.trim();

  return (
    <LabelPrimitive.Root ref={ref} className={labelClasses} {...props}>
      {isRequired && (
        <span className="label__required" aria-label="required">
          *
        </span>
      )}
      {text}
    </LabelPrimitive.Root>
  );
});

Label.displayName = 'Label';

export { Label };
