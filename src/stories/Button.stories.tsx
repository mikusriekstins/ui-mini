import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
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
    size: {
      control: { type: 'select' },
      options: ['default', 'large'],
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
    as: {
      control: false,
      description:
        'Custom component to render the button as (e.g., React Router Link). Use with the `to` prop.',
    },
    to: {
      control: { type: 'text' },
      description:
        'Destination path when using a custom component with the `as` prop (e.g., React Router Link).',
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

const MockRouterLink = ({
  to,
  children,
  ...props
}: {
  to: string;
  children: React.ReactNode;
  [key: string]: unknown;
}) => (
  <a href={to} {...props} style={{ textDecoration: 'none' }}>
    {children}
  </a>
);

export const AsRouterLink: Story = {
  args: {
    children: 'Navigate to Profile',
    variant: 'secondary',
    as: MockRouterLink,
    to: '/profile',
    icon: 'arrow-right',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Button rendered with a custom component (e.g., React Router Link). Use the `as` prop to specify the component and `to` for the destination.',
      },
    },
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    variant: 'primary',
    size: 'large',
    icon: 'arrow-right',
  },
};
