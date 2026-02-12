import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup, Radio } from '../components/Radio';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Radio',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['vertical', 'horizontal'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    defaultValue: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="option1" label="Option 1" />
      <Radio value="option2" label="Option 2" />
      <Radio value="option3" label="Option 3" />
    </RadioGroup>
  ),
  args: {
    defaultValue: 'option1',
  },
};

export const Horizontal: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="small" label="Small" />
      <Radio value="medium" label="Medium" />
      <Radio value="large" label="Large" />
    </RadioGroup>
  ),
  args: {
    orientation: 'horizontal',
    defaultValue: 'medium',
  },
};

export const Disabled: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="option1" label="Available option" />
      <Radio value="option2" label="Disabled option" disabled />
      <Radio value="option3" label="Another available option" />
    </RadioGroup>
  ),
  args: {
    defaultValue: 'option1',
  },
};

export const DisabledGroup: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="option1" label="Option 1" />
      <Radio value="option2" label="Option 2" />
      <Radio value="option3" label="Option 3" />
    </RadioGroup>
  ),
  args: {
    disabled: true,
    defaultValue: 'option2',
  },
};

export const WithoutLabels: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="option1" />
      <Radio value="option2" />
      <Radio value="option3" />
    </RadioGroup>
  ),
  args: {
    defaultValue: 'option1',
  },
};

export const WithLongLabels: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <Radio
        value="basic"
        label="Basic plan - $10/month with limited features"
      />
      <Radio
        value="pro"
        label="Pro plan - $25/month with advanced features and priority support"
      />
      <Radio
        value="enterprise"
        label="Enterprise plan - Custom pricing with dedicated support and custom integrations"
      />
    </RadioGroup>
  ),
  args: {
    defaultValue: 'pro',
  },
};
