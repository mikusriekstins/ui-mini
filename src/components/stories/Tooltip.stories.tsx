import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { Tooltip } from '../Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Tooltip
      content="Basic tooltip content"
      trigger={<Button variant="secondary">Hover me</Button>}
    />
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Tooltip
      content={
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '12px' }}>ℹ️</span>
          <span>Tooltip with icon</span>
        </div>
      }
      trigger={<Button variant="secondary">Hover for info</Button>}
    />
  ),
};

export const Positioning: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Tooltip
        content="Tooltip on top"
        trigger={<Button variant="secondary">Top</Button>}
      />

      <Tooltip
        content="Tooltip on right"
        trigger={<Button variant="secondary">Right</Button>}
      />

      <Tooltip
        content="Tooltip on bottom"
        trigger={<Button variant="secondary">Bottom</Button>}
      />

      <Tooltip
        content="Tooltip on left"
        trigger={<Button variant="secondary">Left</Button>}
      />
    </div>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Tooltip
      content="This is a longer tooltip with multiple lines of text to demonstrate how the tooltip handles wrap and word-break."
      trigger={<Button variant="secondary">Long text</Button>}
    />
  ),
};

export const CustomTrigger: Story = {
  render: () => (
    <Tooltip
      content="Custom trigger tooltip"
      trigger={
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'var(--ui-color-primary-600)',
            color: 'var(--ui-color-white)',
            cursor: 'pointer',
          }}
        >
          ?
        </span>
      }
    />
  ),
};

export const Disabled: Story = {
  render: () => (
    <Tooltip
      content="Disabled tooltip"
      trigger={
        <Button
          variant="secondary"
          disabled
          style={{ opacity: 0.6, cursor: 'not-allowed' }}
        >
          Disabled button
        </Button>
      }
    />
  ),
};
