import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../components/Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: { type: 'text' },
      description: 'The label text content',
    },
    isRequired: {
      control: { type: 'boolean' },
      description: 'Shows a required indicator (*)',
    },
    htmlFor: {
      control: { type: 'text' },
      description: 'Associates label with form element',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Username',
  },
};

export const Required: Story = {
  args: {
    text: 'Email Address',
    isRequired: true,
  },
};

export const WithHtmlFor: Story = {
  args: {
    text: 'Password',
    htmlFor: 'password-input',
    isRequired: true,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Label {...args} />
      <input
        type="password"
        id="password-input"
        placeholder="Enter your password"
        style={{
          padding: '8px 12px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          fontSize: '14px',
        }}
      />
    </div>
  ),
};
