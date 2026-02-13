import { Root } from '@radix-ui/react-label';
import { forwardRef } from 'react';
import type { ElementRef, ComponentPropsWithoutRef } from 'react';
import './Label.css';

export interface LabelProps extends ComponentPropsWithoutRef<typeof Root> {
  text: string;
  isRequired?: boolean;
}

const Label = forwardRef<ElementRef<typeof Root>, LabelProps>(
  ({ className = '', text, isRequired = false, ...props }, ref) => {
    const labelClasses = `label ${className}`.trim();

    return (
      <Root ref={ref} className={labelClasses} {...props}>
        {isRequired && (
          <span className="label__required" aria-label="required">
            *
          </span>
        )}
        {text}
      </Root>
    );
  }
);

Label.displayName = 'Label';

export { Label };
