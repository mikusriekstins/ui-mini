import * as React from 'react';
import { Label } from './Label';
import './TextInput.css';

export interface TextInputProps
  extends React.ComponentPropsWithoutRef<'input'> {
  label?: string;
  isRequired?: boolean;
  error?: string;
  helperText?: string;
}

const TextInput = React.forwardRef<React.ComponentRef<'input'>, TextInputProps>(
  (
    {
      className = '',
      label,
      isRequired = false,
      error,
      helperText,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || React.useId();
    const textInputClasses = `text-input ${className}`.trim();
    const inputClasses = [
      'text-input__input',
      error && 'text-input__input--error',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={textInputClasses}>
        {label && (
          <Label
            text={label}
            isRequired={isRequired}
            htmlFor={inputId}
            className="text-input__label"
          />
        )}
        <input
          ref={ref}
          id={inputId}
          className={inputClasses}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={
            error || helperText ? `${inputId}-description` : undefined
          }
          {...props}
        />
        {(error || helperText) && (
          <div
            id={`${inputId}-description`}
            className={`text-input__description ${
              error
                ? 'text-input__description--error'
                : 'text-input__description--helper'
            }`}
          >
            {error || helperText}
          </div>
        )}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';

export { TextInput };
