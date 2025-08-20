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

export const AllSizes: Story = {
  render: () => (
    <div
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        padding: '24px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <Loading size="small" />
        <span style={{ fontSize: 'var(--font-size-2xs)', color: '#666' }}>
          small (1rem)
        </span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <Loading size="medium" />
        <span style={{ fontSize: 'var(--font-size-2xs)', color: '#666' }}>
          medium (1.5rem)
        </span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <Loading size="large" />
        <span style={{ fontSize: 'var(--font-size-2xs)', color: '#666' }}>
          large (2rem)
        </span>
      </div>
    </div>
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Loading />
      <Loading style={{ backgroundColor: '#ef4444' }} />
      <Loading style={{ backgroundColor: '#22c55e', borderRadius: '50%' }} />
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '16px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
        }}
      >
        <Loading size="small" />
        <span>Loading data...</span>
      </div>

      <div
        style={{
          position: 'relative',
          width: '200px',
          height: '100px',
          backgroundColor: 'var(--color-muted)',
          borderRadius: 'var(--radius-md)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Loading />
      </div>

      <button
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          backgroundColor: 'var(--color-primary-600)',
          color: 'white',
          border: 'none',
          borderRadius: 'var(--radius-md)',
          cursor: 'pointer',
        }}
        disabled
      >
        <Loading size="small" style={{ backgroundColor: 'currentColor' }} />
        Submitting...
      </button>
    </div>
  ),
};
