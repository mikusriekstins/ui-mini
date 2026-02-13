import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { useEffect } from 'react';
import { vi, expect, describe, it, beforeEach } from 'vitest';

import { useTheme } from '../../hooks/useTheme';
import { ThemeProvider } from '../ThemeProvider';

// Test component that uses the theme context
const TestComponent = ({
  onThemeChange,
}: {
  onThemeChange?: (themeData: { theme: string; resolvedTheme: string }) => void;
}) => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    onThemeChange?.({ theme, resolvedTheme });
  }, [theme, resolvedTheme, onThemeChange]);

  return (
    <div>
      <div data-testid="current-theme">{theme}</div>
      <div data-testid="resolved-theme">{resolvedTheme}</div>
      <button onClick={() => setTheme('light')}>Set Light</button>
      <button onClick={() => setTheme('dark')}>Set Dark</button>
      <button onClick={() => setTheme('system')}>Set System</button>
    </div>
  );
};

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Mock matchMedia
const matchMediaMock = (query: string) => ({
  matches: query === '(prefers-color-scheme: dark)' ? false : false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(matchMediaMock),
});

describe('ThemeProvider', () => {
  beforeEach(() => {
    localStorageMock.clear();
    vi.clearAllMocks();
  });

  it('renders children correctly', () => {
    render(
      <ThemeProvider>
        <div>Test content</div>
      </ThemeProvider>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('provides default theme as system', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme')).toHaveTextContent('system');
  });

  it('uses provided defaultTheme', () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark');
    expect(screen.getByTestId('resolved-theme')).toHaveTextContent('dark');
  });

  it('uses controlled theme when provided', () => {
    render(
      <ThemeProvider theme="light">
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme')).toHaveTextContent('light');
    expect(screen.getByTestId('resolved-theme')).toHaveTextContent('light');
  });

  it('allows theme changes in uncontrolled mode', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const lightButton = screen.getByRole('button', { name: /set light/i });
    await user.click(lightButton);

    expect(screen.getByTestId('current-theme')).toHaveTextContent('light');
    expect(screen.getByTestId('resolved-theme')).toHaveTextContent('light');
  });

  it('prevents theme changes in controlled mode', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider theme="dark">
        <TestComponent />
      </ThemeProvider>
    );

    const lightButton = screen.getByRole('button', { name: /set light/i });
    await user.click(lightButton);

    // Should remain dark since it's controlled
    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark');
  });

  it('saves theme to localStorage', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const darkButton = screen.getByRole('button', { name: /set dark/i });
    await user.click(darkButton);

    expect(localStorageMock.getItem('ui-mini-theme')).toBe('dark');
  });

  it('uses custom storage key', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider storageKey="custom-theme">
        <TestComponent />
      </ThemeProvider>
    );

    const lightButton = screen.getByRole('button', { name: /set light/i });
    await user.click(lightButton);

    expect(localStorageMock.getItem('custom-theme')).toBe('light');
  });

  it('loads theme from localStorage on mount', () => {
    localStorageMock.setItem('ui-mini-theme', 'dark');

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark');
  });

  it('handles localStorage errors gracefully', () => {
    const originalSetItem = localStorageMock.setItem;
    localStorageMock.setItem = vi.fn(() => {
      throw new Error('localStorage error');
    });

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    // Should not throw error
    expect(screen.getByTestId('current-theme')).toBeInTheDocument();

    localStorageMock.setItem = originalSetItem;
  });

  it('updates controlled theme when prop changes', () => {
    const { rerender } = render(
      <ThemeProvider theme="light">
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme')).toHaveTextContent('light');

    rerender(
      <ThemeProvider theme="dark">
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark');
  });

  it('resolves system theme based on media query', () => {
    const mockMatchMedia = vi.fn().mockImplementation((query) => ({
      matches: query === '(prefers-color-scheme: dark)' ? true : false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    window.matchMedia = mockMatchMedia;

    render(
      <ThemeProvider defaultTheme="system">
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme')).toHaveTextContent('system');
    expect(screen.getByTestId('resolved-theme')).toHaveTextContent('dark');
  });

  it('updates document root data-theme attribute', () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <TestComponent />
      </ThemeProvider>
    );

    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('throws error when useTheme is used outside provider', () => {
    const TestComponentWithoutProvider = () => {
      try {
        useTheme();
        return <div>Should not render</div>;
      } catch (error) {
        return <div>Error: {(error as Error).message}</div>;
      }
    };

    render(<TestComponentWithoutProvider />);

    expect(
      screen.getByText(/useTheme must be used within a ThemeProvider/)
    ).toBeInTheDocument();
  });
});
