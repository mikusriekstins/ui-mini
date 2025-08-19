import React from 'react';
import Alert from '../components/Alert/Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    variant: {
      options: ['default', 'success', 'error', 'warning'],
      control: { type: 'select' }
    }
  }
};

const Template = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  message: 'This is an alert message',
  description: 'This is a description of the alert'
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  message: 'Success message',
  description: 'Operation was successful'
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  message: 'Error message',
  description: 'Something went wrong'
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  message: 'Warning message',
  description: 'This is a warning'
};

export const Dismissible = Template.bind({});
Dismissible.args = {
  variant: 'default',
  message: 'Dismissible alert',
  onClose: () => console.log('Alert closed')
};