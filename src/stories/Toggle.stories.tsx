import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '../components/Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    pressed: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Toggle',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Toggle',
    variant: 'secondary',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};

export const DisabledPressed: Story = {
  args: {
    children: 'Disabled & Pressed',
    disabled: true,
    pressed: true,
  },
};

export const WithLongText: Story = {
  args: {
    children: 'This is a toggle with longer text',
    variant: 'primary',
  },
};
