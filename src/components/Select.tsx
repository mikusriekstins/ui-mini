import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Icon } from './Icon';
import './Select.css';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  id?: string;
}

const Select = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Root>,
  SelectProps
>(
  (
    {
      options,
      value,
      defaultValue,
      placeholder,
      onChange,
      disabled,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const selectClasses = `select ${className}`.trim();

    return (
      <SelectPrimitive.Root
        value={value}
        defaultValue={defaultValue}
        onValueChange={onChange}
        disabled={disabled}
        {...props}
      >
        <SelectPrimitive.Trigger
          ref={ref}
          className={`select__trigger ${selectClasses}`}
          id={id}
        >
          <SelectPrimitive.Value placeholder={placeholder} />
          <SelectPrimitive.Icon className="select__icon">
            <Icon name="chevron-down" size="small" />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            className="select__content"
            position="popper"
            sideOffset={4}
          >
            <SelectPrimitive.Viewport className="select__viewport">
              {options.map((option) => (
                <SelectPrimitive.Item
                  key={option.value}
                  value={option.value}
                  className="select__item"
                >
                  <SelectPrimitive.ItemText>
                    {option.label}
                  </SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    );
  }
);

Select.displayName = 'Select';

export { Select };
