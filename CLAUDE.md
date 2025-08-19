# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Build & Package

- `npm run build` - Build the library for distribution
- `npm run build:watch` - Build in watch mode for development
- `npm run prepublishOnly` - Runs build before publishing (automatic)

### Testing

- `npm test` - Run tests with Vitest
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report (80% threshold required)

### Development & Documentation

- `npm run storybook` - Start Storybook development server on port 6006
- `npm run build-storybook` - Build Storybook for production

### Code Quality

- `npm run lint` - Run ESLint and auto-fix issues
- `npm run format` - Format code with Prettier

## Architecture Overview

This is a React UI component library built with:

- **Radix UI** - Headless UI primitives providing accessibility and behavior
- **TypeScript** - Full type safety with strict compiler options
- **Vite** - Build tool configured for library mode with dual ESM/CJS output
- **Vitest** - Testing framework with jsdom environment and coverage reporting
- **Storybook** - Component development and documentation

### Code Structure

- `src/index.ts` - Main library entry point, exports all components and types
- `src/components/` - Component implementations
  - `index.ts` - Component barrel exports
  - `ComponentName.tsx` - Individual component files with co-located CSS
  - `__tests__/` - Unit tests for components
- `src/context/` - React contexts (ThemeContext)
- `src/hooks/` - Custom React hooks (useTheme)
- `src/stories/` - Storybook stories and documentation
- `src/styles/` - Global CSS variables and utilities

### Component Architecture

All components follow this pattern:

- Extend Radix UI primitives using `React.ComponentPropsWithoutRef<typeof RadixPrimitive>` or standard HTML element props
- Use `React.forwardRef` for proper ref forwarding to underlying DOM elements
- Set `displayName` for better debugging and React DevTools
- Export both the component and its props interface
- Import only specific React functions needed (e.g., `import * as React from 'react'`)
- Co-locate CSS files with components (`ComponentName.css`)

### Styling Architecture

- **CSS Variables** - Use CSS custom properties defined in `src/styles/variables.css`
- **BEM Methodology** - Block Element Modifier naming convention for CSS classes
- **Theme Support** - All components support light/dark themes via CSS variables
- **Logical Properties** - Use CSS logical properties for international layout support
- **No Inline Styles** - All styling in dedicated CSS files

### Testing Strategy

- **Unit Tests** - Simple tests covering component logic and rendering
- **Coverage Thresholds** - 80% coverage required for branches, functions, lines, statements
- **Test Setup** - Configured with jsdom environment and React Testing Library
- **Test Location** - Tests in `src/components/__tests__/` directory

### Build Configuration

- **Dual Output** - ESM and CommonJS builds via Vite
- **Type Generation** - TypeScript declarations generated via vite-plugin-dts
- **CSS Bundling** - CSS bundled into single file exported as `./styles`
- **Peer Dependencies** - React/ReactDOM externalized (version 18+)
- **Source Maps** - Generated for debugging
