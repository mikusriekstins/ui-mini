import type { Meta, StoryObj } from '@storybook/react';

import { Loading } from '../components/Loading';

const meta: Meta<typeof Loading> = {
  title: 'Components/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'overlay',
      values: [
        {
          name: 'overlay',
          value: 'rgba(0, 0, 0, 0.2)',
        },
        {
          name: 'light',
          value: '#ffffff',
        },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'medium',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          padding: '40px',
          borderRadius: '8px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Small: Story = {
  args: {
    size: 'small',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          padding: '40px',
          borderRadius: '8px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          padding: '40px',
          borderRadius: '8px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Large: Story = {
  args: {
    size: 'large',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          padding: '40px',
          borderRadius: '8px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};
