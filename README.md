# UI Component Library

A React UI component library built with TypeScript, Radix UI primitives, and modern CSS. This library provides accessible, customizable components for building user interfaces.

## Components

- **Button** - Flexible button component with variants and icon support
- **Toggle** - Accessible toggle component built on Radix UI
- **Icon** - Icon component using Lucide React icons

## Installation

### Option 1: npm link (for local development)

In this library directory:

```bash
npm run build  # Build the library first
npm link
```

In your React project:

```bash
npm link ui-lib
```

### Option 2: npm pack (for testing)

In this library directory:

```bash
npm run build  # Build the library first
npm pack
```

In your React project:

```bash
npm install /path/to/ui-lib-1.0.0.tgz
```

### Option 3: Publish to npm (for production)

```bash
npm publish  # This will automatically run build via prepublishOnly
npm install ui-lib
```

## Setup in Your React Project

### 1. Install the Library

The library bundles all its dependencies except React:

```bash
npm install ui-lib
```

**Note**: You only need React 18+ in your project. All other dependencies (Radix UI, Lucide icons) are bundled with the library.

### 2. Import Components and Styles

```tsx
import { Button, Toggle, Icon } from 'ui-lib';
import 'ui-lib/styles'; // Import the bundled CSS
```

## Usage Examples

### Button Component

```tsx
import { Button } from 'ui-lib';

function App() {
  return (
    <div>
      {/* Basic button */}
      <Button>Click me</Button>

      {/* Secondary variant */}
      <Button variant="secondary">Secondary</Button>

      {/* With icon */}
      <Button icon="arrow-right">Save</Button>

      {/* Icon only */}
      <Button icon="arrow-up" />

      {/* With click handler */}
      <Button onClick={() => alert('Clicked!')}>Alert Button</Button>

      {/* Disabled */}
      <Button disabled>Disabled</Button>
    </div>
  );
}
```

### Toggle Component

```tsx
import { Toggle } from 'ui-lib';
import { useState } from 'react';

function App() {
  const [pressed, setPressed] = useState(false);

  return (
    <div>
      {/* Basic toggle */}
      <Toggle pressed={pressed} onPressedChange={setPressed}>
        Toggle me
      </Toggle>

      {/* Secondary variant */}
      <Toggle
        variant="secondary"
        pressed={pressed}
        onPressedChange={setPressed}
      >
        Secondary Toggle
      </Toggle>
    </div>
  );
}
```

### Icon Component

```tsx
import { Icon } from 'ui-lib';

function App() {
  return (
    <div>
      {/* Basic icon */}
      <Icon name="arrow-right" />

      {/* Custom size */}
      <Icon name="arrow-up" size={32} />

      {/* With custom className */}
      <Icon name="arrow-left" className="my-custom-class" />

      {/* All available icons */}
      <Icon name="arrow-left" />
      <Icon name="arrow-up" />
      <Icon name="arrow-right" />
      <Icon name="arrow-down" />
    </div>
  );
}
```

## API Reference

### Button Props

```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  icon?: 'arrow-left' | 'arrow-up' | 'arrow-right' | 'arrow-down';
  children?: React.ReactNode;
}
```

### Toggle Props

```tsx
interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> {
  variant?: 'primary' | 'secondary';
}
```

### Icon Props

```tsx
interface IconProps extends Omit<LucideProps, 'size'> {
  name: 'arrow-left' | 'arrow-up' | 'arrow-right' | 'arrow-down';
  size?: number | string;
}
```

## TypeScript Support

This library is built with TypeScript and exports all component prop interfaces:

```tsx
import {
  Button,
  ButtonProps,
  Toggle,
  ToggleProps,
  Icon,
  IconProps,
  IconName,
} from 'ui-lib';

// Use the prop interfaces for your own components
interface MyComponentProps {
  buttonProps: ButtonProps;
  iconName: IconName;
}
```

## Complete Example

```tsx
import React, { useState } from 'react';
import { Button, Toggle, Icon } from 'ui-lib';
import 'ui-lib/styles';

function App() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div
      style={{
        padding: '20px',
        display: 'flex',
        gap: '16px',
        flexDirection: 'column',
      }}
    >
      <h1>UI Library Demo</h1>

      <section>
        <h2>Buttons</h2>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button icon="arrow-right">With Icon</Button>
          <Button icon="arrow-up" />
        </div>
      </section>

      <section>
        <h2>Toggle</h2>
        <Toggle pressed={isToggled} onPressedChange={setIsToggled}>
          {isToggled ? 'On' : 'Off'}
        </Toggle>
      </section>

      <section>
        <h2>Icons</h2>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Icon name="arrow-left" />
          <Icon name="arrow-up" />
          <Icon name="arrow-right" />
          <Icon name="arrow-down" />
        </div>
      </section>
    </div>
  );
}

export default App;
```

## Development

To see the components in action and explore all available props:

```bash
npm run storybook
```

This will start Storybook on `http://localhost:6006` where you can view all components and their documentation.

## Architecture

This library follows these principles:

- **Accessibility First**: Built on Radix UI primitives for screen reader support
- **TypeScript**: Full type safety with exported interfaces
- **CSS Variables**: Customizable styling with CSS custom properties
- **BEM Methodology**: Consistent CSS class naming
- **React Best Practices**: Proper ref forwarding and display names

## Browser Support

This library supports all modern browsers and requires:

- React 18+
- Modern ES2020+ JavaScript environment
- CSS custom properties support
