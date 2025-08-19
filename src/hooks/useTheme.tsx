import * as React from 'react';
import { ThemeContext, ThemeContextValue } from '../context/ThemeContext';

export function useTheme(): ThemeContextValue {
  const context = React.useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}
