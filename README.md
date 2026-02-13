# UI Mini

A modern React component library built with Radix UI primitives, TypeScript, and CSS variables.

## Installation

```bash
npm install @mikusriekstins/ui-mini
```

## Quick Start

```tsx
import { ThemeProvider } from '@mikusriekstins/ui-mini';
import { Button, TextInput } from '@mikusriekstins/ui-mini';
import '@mikusriekstins/ui-mini/styles';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Button variant="primary" size="large">
        Click me
      </Button>
      <TextInput label="Email" placeholder="Enter your email" />
    </ThemeProvider>
  );
}
```

**Important**: Import `@mikusriekstins/ui-mini/styles` (CSS file) to ensure default CSS variables are applied properly to your application.

## Color and Spacing Variables

The library provides a comprehensive design system with:

- **Color variables**: `--color-primary-50` through `--color-primary-900`, `--color-secondary-50` through `--color-secondary-900`, `--color-gray-50` through `--color-gray-900`
- **Semantic colors**: `--color-background`, `--color-foreground`, `--color-border`, `--color-muted`, etc.
- **Spacing variables**: `--xss`, `--xs`, `--sm`, `--md`, `--lg`, `--xl`, `--xxl`, `--xxxl`
- **Typography**: `--font-size-xs` through `--font-size-xxxl`, `--line-height-sm` through `--line-height-lg`
- **Border radius**: `--border-radius-sm`, `--border-radius-md`, `--border-radius-lg`
- **Shadows**: `--shadow-sm`, `--shadow-md`, `--shadow-lg`

All colors are defined in `/dist/ui-mini.css` and can be customized by overriding CSS variables.

## Features

- **Accessibility-first**: Built on Radix UI primitives for fully accessible components
- **Theming**: Light/dark/system theme support with localStorage persistence
- **TypeScript**: Full type definitions included
- **CSS variables**: Customizable design tokens
- **Icon support**: 75+ Lucide React icons via the Icon component
- **Component variants**: Multiple style variants where applicable

## Components (15 total)

- **Button** - Primary and secondary button variants with icon support
- **TextInput** - Text input with label, error state, and helper text
- **Checkbox** - Accessible checkbox with label support
- **Radio** - Radio button group with individual radio options
- **Toggle** - Toggle switch with primary/secondary variants
- **Icon** - 75+ icons from Lucide React with size options
- **Label** - Accessible form labels with required indicator
- **DropdownMenu** - Dropdown menu with trigger, separator, and items
- **Dialog** - Modal dialog with overlay, title, and description
- **Popover** - Popover with configurable alignment and side
- **Tabs** - Tab navigation with tab content panels
- **Select** - Select dropdown with custom options
- **VisuallyHidden** - Visually hidden element for accessibility
- **Loading** - Spinner with small/medium/large sizes
- **ThemeProvider** - Context provider for theme management

## Technical Details

- **Version**: 0.10.1
- **License**: ISC
- **Dependencies**: @radix-ui/react-\* (8 packages), lucide-react
- **Peer Dependencies**: React >=19.0.0, react-dom >=19.0.0
- **Build**: Vite + TypeScript
- **Testing**: Vitest + React Testing Library
