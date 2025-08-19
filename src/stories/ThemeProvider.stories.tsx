import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider, useTheme, Button, Toggle, Icon } from '../index';

function ThemeDemo() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <h3>
          Current Theme: {theme} (resolved: {resolvedTheme})
        </h3>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
          <Button onClick={() => setTheme('light')}>Light</Button>
          <Button onClick={() => setTheme('dark')}>Dark</Button>
          <Button onClick={() => setTheme('system')}>System</Button>
        </div>
      </div>

      <div>
        <h4>Component Examples:</h4>
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'center',
            marginTop: '0.5rem',
          }}
        >
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
          <Button variant="primary" icon="heart">
            With Icon
          </Button>
          <Toggle>Toggle</Toggle>
          <Icon name="settings" />
        </div>
      </div>
    </div>
  );
}

const meta: Meta<typeof ThemeProvider> = {
  title: 'Theming/ThemeProvider',
  component: ThemeProvider,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  render: (args) => (
    <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
  ),
  args: {
    defaultTheme: 'system',
  },
};
