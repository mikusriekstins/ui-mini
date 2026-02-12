import type { Meta, StoryObj } from '@storybook/react';

import { TextInput } from '../components/TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A text input component that combines a label and input field. Designed to work seamlessly with TanStack Form for form validation and state management.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the input field',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown in the input',
    },
    isRequired: {
      control: 'boolean',
      description: 'Shows required asterisk in label',
    },
    error: {
      control: 'text',
      description: 'Error message to display below input',
    },
    helperText: {
      control: 'text',
      description: 'Helper text to display below input',
    },
    message: {
      control: 'text',
      description: 'Message text to display below input',
    },
    severity: {
      control: { type: 'select', options: ['default', 'danger'] },
      description: 'Severity level for message',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input field',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'tel', 'url', 'search'],
      description: 'Input type',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export const Required: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    isRequired: true,
    type: 'email',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    helperText: 'Must be at least 8 characters long',
    type: 'password',
  },
};

export const WithError: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    error: 'Username is already taken',
    value: 'invalid-username',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    placeholder: 'This field is disabled',
    disabled: true,
    value: 'Cannot edit this',
  },
};

export const DifferentTypes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        minWidth: '300px',
      }}
    >
      <TextInput label="Text Input" placeholder="Enter text" type="text" />
      <TextInput label="Email Input" placeholder="Enter email" type="email" />
      <TextInput
        label="Password Input"
        placeholder="Enter password"
        type="password"
      />
      <TextInput
        label="Phone Input"
        placeholder="Enter phone number"
        type="tel"
      />
      <TextInput label="URL Input" placeholder="Enter website URL" type="url" />
      <TextInput label="Search Input" placeholder="Search..." type="search" />
    </div>
  ),
};

export const FormValidation: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        minWidth: '300px',
      }}
    >
      <TextInput
        label="Valid Field"
        placeholder="Enter text"
        value="Valid input"
        helperText="This field is valid"
      />
      <TextInput
        label="Required Field"
        placeholder="Enter required text"
        isRequired={true}
        error="This field is required"
      />
      <TextInput
        label="Email Field"
        placeholder="Enter email"
        type="email"
        value="invalid-email"
        error="Please enter a valid email address"
      />
      <TextInput
        label="Password Field"
        placeholder="Enter password"
        type="password"
        value="123"
        error="Password must be at least 8 characters"
        isRequired={true}
      />
    </div>
  ),
};

export const WithMessage: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    message: 'This username is available',
  },
};

export const WithDangerMessage: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    message: 'This username is already taken',
    severity: 'danger',
    value: 'taken-username',
  },
};
