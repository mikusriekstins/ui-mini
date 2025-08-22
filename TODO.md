# TODO: Implement Alert Component

## Overview

This document outlines the tasks required to implement a new `Alert` component in the React UI library, following the architecture and conventions defined in `CLAUDE.md`.

---

## 1. Component Structure Setup

- Create a new folder: `src/components/Alert`
- Inside the folder, create the following files:
  - `Alert.tsx` - Main component implementation
  - `Alert.css` - Component-specific styles
  - `__tests__/Alert.test.tsx` - Unit tests
  - `stories/Alert.stories.tsx` - Storybook documentation

---

## 2. TypeScript Props Interface

Define a `AlertProps` interface in `Alert.tsx`:

- Extend `React.ComponentPropsWithoutRef<'div'>`
- Include the following props:
  - `variant` (success/error/warning/info)
  - `title` (optional)
  - `description` (optional)
  - `action` (optional button props)
  - `onClose` (optional callback for dismissible alerts)

Example:

```tsx
interface AlertProps extends React.ComponentPropsWithoutRef<'div'> {
  variant?: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  description?: string;
  action?: React.ReactNode;
  onClose?: () => void;
}
```

---

## 3. Component Implementation

Implement `Alert.tsx`:

- Use `React.forwardRef` if necessary
- Apply BEM-style class names (e.g., `alert`, `alert--success`)
- Use CSS variables from `src/styles/variables.css`
- Add accessibility attributes (e.g., `role="alert"`)

Example:

```tsx
import * as React from 'react';
import './Alert.css';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    { variant = 'info', title, description, action, onClose, ...props },
    ref
  ) => {
    const handleClose = () => {
      if (onClose) onClose();
    };

    return (
      <div ref={ref} className={`alert alert--${variant}`} {...props}>
        {title && <div className="alert__title">{title}</div>}
        {description && <div className="alert__description">{description}</div>}
        {action && <div className="alert__action">{action}</div>}
        {onClose && (
          <button className="alert__close" onClick={handleClose}>
            ×
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';

export { Alert };
```

---

## 4. Styling with BEM and CSS Variables

Create `Alert.css` with styles:

- Base styles for `.alert`
- Variant-specific styles (e.g., `.alert--success`)
- Modifier classes for title, description, action, and close button

Example:

```css
.alert {
  padding: 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.alert--success {
  background-color: #d1fae5;
  color: #059669;
}

.alert__title {
  font-weight: bold;
}

.alert__close {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}
```

---

## 5. Unit Testing with Vitest

Implement `__tests__/Alert.test.tsx`:

- Test rendering with default and variant props
- Test `onClose` callback behavior
- Test accessibility attributes

Example:

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Alert from './Alert';

test('renders alert with default variant', () => {
  render(<Alert>Test Alert</Alert>);
  expect(screen.getByText('Test Alert')).toBeInTheDocument();
});

test('calls onClose when close button is clicked', () => {
  const onClose = jest.fn();
  render(<Alert onClose={onClose}>Test Alert</Alert>);
  userEvent.click(screen.getByRole('button'));
  expect(onClose).toHaveBeenCalled();
});
```

---

## 6. Storybook Documentation

Create `stories/Alert.stories.tsx`:

- Define stories for each variant
- Include examples with title, description, and action

Example:

```tsx
import { Meta, StoryObj } from '@storybook/react';
import Alert from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta<typeof Alert>;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    variant: 'info',
    title: 'Info Alert',
    description: 'This is an info alert.',
  },
};
```

---

## 7. Export and Integration

Update `src/components/index.ts` to export the new component:

```ts
export * from './Alert/Alert';
```

---

## 8. Build and Test

Run the following commands to test and build the component:

```bash
npm run test
npm run build
```
