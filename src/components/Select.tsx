import { forwardRef } from 'react';
import type { ComponentRef } from 'react';
import {
  Root,
  Trigger,
  Value,
  Portal,
  Content,
  Viewport,
  Item,
  ItemText,
  Icon as SelectIcon,
} from '@radix-ui/react-select';

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

const Select = forwardRef<ComponentRef<typeof Root>, SelectProps>(
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
      <Root
        value={value}
        defaultValue={defaultValue}
        onValueChange={onChange}
        disabled={disabled}
        {...props}
      >
        <Trigger
          ref={ref}
          className={`select__trigger ${selectClasses}`}
          id={id}
        >
          <Value placeholder={placeholder} />
          <SelectIcon className="select__icon">
            <Icon name="chevron-down" size="small" />
          </SelectIcon>
        </Trigger>

        <Portal>
          <Content className="select__content" position="popper" sideOffset={4}>
            <Viewport className="select__viewport">
              {options.map((option) => (
                <Item
                  key={option.value}
                  value={option.value}
                  className="select__item"
                >
                  <ItemText>{option.label}</ItemText>
                </Item>
              ))}
            </Viewport>
          </Content>
        </Portal>
      </Root>
    );
  }
);

Select.displayName = 'Select';

export { Select };
