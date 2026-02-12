import type { Preview } from '@storybook/react-vite';

import { ThemeProvider } from '../src/components/ThemeProvider';
import type { Theme } from '../src/context/ThemeContext';
import '../src/styles/variables.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'circlehollow', title: 'Light' },
          { value: 'dark', icon: 'circle', title: 'Dark' },
          { value: 'system', icon: 'cog', title: 'System' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme as Theme;

      return (
        <ThemeProvider theme={theme}>
          <div
            style={{
              backgroundColor: 'var(--color-background)',
              color: 'var(--color-foreground)',
              padding: '1rem',
            }}
          >
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
