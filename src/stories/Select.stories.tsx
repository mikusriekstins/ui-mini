import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Select, type SelectOption } from '../components/Select';
import '../styles/variables.css';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const fruitOptions: SelectOption[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'strawberry', label: 'Strawberry' },
];

const countryOptions: SelectOption[] = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
];

export const Basic: Story = {
  args: {
    options: fruitOptions,
    placeholder: 'Choose a fruit',
  },
};

export const WithDefaultValue: Story = {
  args: {
    options: fruitOptions,
    defaultValue: 'banana',
    placeholder: 'Choose a fruit',
  },
};

export const Disabled: Story = {
  args: {
    options: fruitOptions,
    disabled: true,
    placeholder: 'Choose a fruit',
  },
};

export const LongOptions: Story = {
  args: {
    options: countryOptions,
    placeholder: 'Select a country',
  },
};

export const Controlled: Story = {
  /* eslint-disable react-hooks/rules-of-hooks */
  render: () => {
    const [value, setValue] = useState<string>('');

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          alignItems: 'center',
        }}
      >
        <Select
          options={fruitOptions}
          value={value}
          onChange={setValue}
          placeholder="Choose a fruit"
        />
        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
          Selected value: {value || 'None'}
        </p>
      </div>
    );
  },
};

export const MultipleSelects: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Select
        options={fruitOptions}
        placeholder="Choose a fruit"
        defaultValue="apple"
      />
      <Select options={countryOptions} placeholder="Select a country" />
      <Select
        options={[
          { value: 'small', label: 'Small' },
          { value: 'medium', label: 'Medium' },
          { value: 'large', label: 'Large' },
        ]}
        placeholder="Size"
        defaultValue="medium"
      />
    </div>
  ),
};
