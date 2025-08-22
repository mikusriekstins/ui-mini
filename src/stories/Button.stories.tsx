import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    icon: {
      control: { type: 'select' },
      options: [
        undefined,
        'arrow-left',
        'arrow-up',
        'arrow-right',
        'arrow-down',
      ],
    },
    href: {
      control: { type: 'text' },
      description:
        'When provided, renders as an anchor tag instead of a button. Supports all standard anchor attributes like target, rel, etc.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
  },
};

export const WithLongText: Story = {
  args: {
    children: 'This is a button with longer text',
    variant: 'primary',
  },
};

export const WithClickHandler: Story = {
  args: {
    children: 'Click Me',
    variant: 'primary',
    onClick: () => alert('Button clicked!'),
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Save',
    variant: 'primary',
    icon: 'arrow-right',
  },
};

export const IconOnly: Story = {
  args: {
    variant: 'primary',
    icon: 'arrow-up',
  },
};

export const SecondaryWithIcon: Story = {
  args: {
    children: 'Cancel',
    variant: 'secondary',
    icon: 'arrow-left',
  },
};

export const AsLink: Story = {
  args: {
    children: 'Visit Documentation',
    variant: 'primary',
    href: 'https://example.com',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
};
