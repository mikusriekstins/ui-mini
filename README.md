# UI Mini

A modern React component library built with Radix UI primitives, TypeScript, and CSS variables. Provides accessible, customizable components with consistent theming and excellent developer experience.

## Installation

```bash
npm install @mikusriekstins/ui-mini
```

## Quick Start

```tsx
import { Button, TextInput, Icon } from '@mikusriekstins/ui-mini';
import '@mikusriekstins/ui-mini/styles';

function App() {
  return (
    <div>
      <TextInput label="Email" placeholder="Enter your email..." />
      <Button icon="arrow-right">Submit</Button>
    </div>
  );
}
```

## Components

### Button

Interactive button with variants and icon support.

```tsx
<Button variant="primary" icon="arrow-right">Save</Button>
<Button variant="secondary" disabled>Cancel</Button>
<Button href="/profile">Link Button</Button>
<Button as={Link} to="/dashboard">Router Link</Button>
```

### TextInput

Form input with label, validation, and helper text.

```tsx
<TextInput
  label="Email"
  placeholder="Enter email..."
  error="Invalid email format"
  isRequired
/>
```

### Select

Dropdown select with searchable options.

```tsx
<Select
  options={[
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
  ]}
  placeholder="Select country..."
  value={country}
  onChange={setCountry}
/>
```

### Checkbox

Checkbox input with optional labels.

```tsx
<Checkbox label="Accept terms" defaultChecked />
<Checkbox label="Subscribe to newsletter" disabled />
```

### Radio

Radio button group for exclusive selections.

```tsx
<RadioGroup value={size} onValueChange={setSize}>
  <Radio value="sm" label="Small" />
  <Radio value="md" label="Medium" />
  <Radio value="lg" label="Large" />
</RadioGroup>
```

### Toggle

Toggle button with pressed state management.

```tsx
<Toggle variant="primary" pressed={enabled} onPressedChange={setEnabled}>
  Enable notifications
</Toggle>
```

### Dialog

Modal dialog with overlay and focus management.

```tsx
<Dialog
  trigger={<Button>Open Dialog</Button>}
  title="Confirm Action"
  description="Are you sure you want to continue?"
>
  <Button onClick={handleConfirm}>Confirm</Button>
</Dialog>
```

### Popover

Floating content panel with customizable positioning.

```tsx
<Popover popoverTrigger={<Button>Show Info</Button>} closeButtonText="Close">
  <div>Popover content here</div>
</Popover>
```

### DropdownMenu

Dropdown menu with keyboard navigation.

```tsx
<DropdownMenu trigger={<Button>Menu</Button>} label="Actions">
  <DropdownMenuItem>Edit</DropdownMenuItem>
  <DropdownMenuItem>Delete</DropdownMenuItem>
</DropdownMenu>
```

### Tabs

Tabbed interface with content panels.

```tsx
<Tabs value={activeTab} onValueChange={setActiveTab}>
  <TabsList>
    <TabsTrigger value="tab1">Overview</TabsTrigger>
    <TabsTrigger value="tab2">Details</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Overview content</TabsContent>
  <TabsContent value="tab2">Details content</TabsContent>
</Tabs>
```

### Label

Semantic form labels with required indicators.

```tsx
<Label text="Full Name" isRequired />
<Label text="Company" htmlFor="company-input" />
```

### Loading

Animated loading indicator with size variants.

```tsx
<Loading size="small" />
<Loading size="medium" />
<Loading size="large" />
```

### Icon

SVG icon component with consistent sizing.

```tsx
<Icon name="star" size="small" />
<Icon name="mail" size="medium" />
```

### ThemeProvider

Context provider for light/dark theme management.

```tsx
<ThemeProvider theme="dark">
  <App />
</ThemeProvider>
```

### VisuallyHidden

Accessible content hidden from visual display.

```tsx
<VisuallyHidden>Screen reader only text</VisuallyHidden>
```

## Icons

18 built-in icons available:

**Navigation**: `arrow-left`, `arrow-up`, `arrow-right`, `arrow-down`, `chevron-down`

**Actions**: `x`, `check`, `download`, `play`

**UI Elements**: `shopping-basket`, `mail`, `image`, `headphones`, `music`, `star`, `triangle-alert`, `lock`, `percent`

```tsx
<Icon name="star" size="small" />
<Icon name="mail" size="medium" />
<Icon name="triangle-alert" size="medium" />
```

## TypeScript Support

Full TypeScript support with exported interfaces:

```tsx
import {
  Button,
  ButtonProps,
  TextInput,
  TextInputProps,
  Icon,
  IconName,
  IconSize,
} from '@mikusriekstins/ui-mini';

// Use interfaces in your components
interface MyFormProps {
  onSubmit: (data: FormData) => void;
  submitIcon?: IconName;
}
```

## Theming

Built-in light/dark mode support with CSS variables:

```tsx
// Automatic theme detection
<ThemeProvider theme="system">
  <App />
</ThemeProvider>

// Force specific theme
<ThemeProvider theme="dark">
  <App />
</ThemeProvider>
```

### CSS Variables

Key customizable variables:

```css
:root {
  --color-primary-600: #e73e1f;
  --font-size-md: 1.125rem;
  --border-radius-md: 0.375rem;
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}
```

## Development

View components and documentation:

```bash
npm run storybook
```

Visit `http://localhost:6006` for interactive component playground.

## Architecture

- **Accessibility**: Built on Radix UI primitives
- **TypeScript**: Full type safety and IntelliSense
- **CSS Variables**: Consistent theming system
- **Tree Shaking**: Import only what you need
- **Modern Build**: ESM/CJS dual output

## Browser Support

- React 18+
- Modern browsers (ES2020+)
- CSS custom properties support

## License

MIT
