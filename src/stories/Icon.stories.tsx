import type { Meta, StoryObj } from '@storybook/react';

import { Icon, iconMap } from '../components/Icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'select' },
      options: [
        'arrow-left',
        'arrow-up',
        'arrow-right',
        'arrow-down',
        'chevron-down',
        'chevron-up',
        'chevron-left',
        'chevron-right',
        'x',
        'check',
        'more-horizontal',
        'more-vertical',
        'menu',
        'maximize',
        'minimize',
        'moon',
        'sun',
        'bell',
        'message-square',
        'heart',
        'share',
        'refresh',
        'filter',
        'sort-desc',
        'shopping-basket',
        'mail',
        'download',
        'image',
        'headphones',
        'music',
        'play',
        'star',
        'triangle-alert',
        'lock',
        'percent',
        'edit',
        'delete',
        'search',
        'add',
        'settings',
        'user',
        'home',
        'eye',
        'eye-off',
        'copy',
        'save',
        'upload',
        'file-down',
        'folder-open',
        'file',
        'error',
        'warning',
        'success',
        'clock',
        'calendar',
        'tag',
        'link',
        'quote',
        'code',
        'terminal',
        'command',
        'palette',
        'layout',
        'grid',
        'list',
        'table',
        'bar-chart',
        'pie-chart',
        'line-chart',
        'globe',
        'map-pin',
        'phone',
        'qr-code',
        'credit-card',
        'wallet',
        'cpu',
        'battery-charging',
        'wifi',
        'bluetooth',
        'camera',
        'mic',
        'volume2',
        'volume-x',
        'monitor',
        'smartphone',
        'laptop',
        'printer',
        'mail-open',
        'archive',
        'inbox',
        'box',
        'package',
        'truck',
        'shield',
        'key',
        'lock-keyhole',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'arrow-right',
    size: 'medium',
  },
};

export const AllIcons: Story = {
  render: () => {
    const iconNames = Object.keys(iconMap) as Array<keyof typeof iconMap>;
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(8, 1fr)',
          gap: '24px',
          padding: '16px',
          maxWidth: '1000px',
        }}
      >
        {iconNames.map((iconName) => (
          <div
            key={iconName}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Icon name={iconName} size="medium" />
            <span style={{ fontSize: 'var(--font-size-xs)', color: '#666' }}>
              {iconName}
            </span>
          </div>
        ))}
      </div>
    );
  },
};

export const Small: Story = {
  args: {
    name: 'arrow-right',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    name: 'arrow-right',
    size: 'medium',
  },
};

export const CustomStyling: Story = {
  args: {
    name: 'arrow-up',
    size: 'medium',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Icon {...args} />
      <Icon {...args} style={{ color: '#3b82f6' }} />
      <Icon {...args} style={{ color: '#ef4444', strokeWidth: '3' }} />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        padding: '16px',
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
        <Icon name="arrow-right" size="small" />
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
        <Icon name="arrow-right" size="medium" />
        <span style={{ fontSize: 'var(--font-size-2xs)', color: '#666' }}>
          medium (1.5rem)
        </span>
      </div>
    </div>
  ),
};
