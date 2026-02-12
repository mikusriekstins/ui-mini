import { useState, useEffect, useCallback, useMemo, ReactNode } from 'react';

import {
  Theme,
  ThemeContext,
  ThemeContextValue,
} from '../context/ThemeContext';

const STORAGE_KEY = 'ui-mini-theme';

export interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  theme?: Theme;
  storageKey?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  theme: controlledTheme,
  storageKey = STORAGE_KEY,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (controlledTheme) return controlledTheme;
    if (typeof window === 'undefined') return defaultTheme;

    try {
      return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
    } catch {
      return defaultTheme;
    }
  });

  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';

    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }

    return theme === 'dark' ? 'dark' : 'light';
  });

  // Update theme when controlled theme changes
  useEffect(() => {
    if (controlledTheme) {
      setThemeState(controlledTheme);
    }
  }, [controlledTheme]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const root = window.document.documentElement;
    root.setAttribute('data-theme', resolvedTheme);
  }, [resolvedTheme]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
      if (theme === 'system') {
        setResolvedTheme(mediaQuery.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    handleChange(); // Set initial value

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const setTheme = useCallback(
    (newTheme: Theme) => {
      // Don't update if in controlled mode
      if (controlledTheme) return;

      try {
        localStorage.setItem(storageKey, newTheme);
      } catch {
        // Ignore localStorage errors
      }

      setThemeState(newTheme);

      if (typeof window !== 'undefined') {
        if (newTheme === 'system') {
          const isDark = window.matchMedia(
            '(prefers-color-scheme: dark)'
          ).matches;
          setResolvedTheme(isDark ? 'dark' : 'light');
        } else {
          setResolvedTheme(newTheme === 'dark' ? 'dark' : 'light');
        }
      }
    },
    [storageKey, controlledTheme]
  );

  const value: ThemeContextValue = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
    }),
    [theme, resolvedTheme, setTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
