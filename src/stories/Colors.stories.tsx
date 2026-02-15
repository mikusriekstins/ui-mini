import type { Meta, StoryObj } from '@storybook/react';
import '../styles/variables.css';

const meta: Meta = {
  title: 'Design System/Colors',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Tier-1 base color palette using CSS custom properties. These foundational colors are used throughout the component system.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const ColorSwatch = ({
  name,
  inverseText,
}: {
  name: string;
  inverseText?: boolean;
}): JSX.Element => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        borderRadius: 'var(--border-radius-md)',
        backgroundColor: `var(${name})`,
        color: inverseText ? '#333' : '#fff',
        fontFamily: 'var(--font-family-sans)',
        minWidth: '120px',
        minHeight: '100px',
      }}
    >
      <span
        style={{
          fontWeight: '600',
        }}
      >
        {name}
      </span>
    </div>
  );
};

export const Colors: Story = {
  render: () => (
    <div>
      <h1>Tier-1 Base Colors</h1>
      <p style={{ marginBottom: '2rem', maxWidth: '600px' }}>
        The foundational color palette using CSS custom properties. These base
        colors are referenced by component-specific tokens throughout the
        system.
      </p>

      <h2>Primary Colors</h2>
      <p style={{ marginBottom: '1rem' }}>
        Blue-based primary colors for main brand elements and primary actions.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem',
        }}
      >
        <ColorSwatch name="--ui-color-primary-50" inverseText />
        <ColorSwatch name="--ui-color-primary-100" inverseText />
        <ColorSwatch name="--ui-color-primary-200" inverseText />
        <ColorSwatch name="--ui-color-primary-300" inverseText />
        <ColorSwatch name="--ui-color-primary-400" inverseText />
        <ColorSwatch name="--ui-color-primary-500" />
        <ColorSwatch name="--ui-color-primary-600" />
        <ColorSwatch name="--ui-color-primary-700" />
        <ColorSwatch name="--ui-color-primary-800" />
        <ColorSwatch name="--ui-color-primary-900" />
      </div>

      <h2>Secondary Colors</h2>
      <p style={{ marginBottom: '1rem' }}>
        Orange-based secondary colors for accents and secondary actions.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem',
        }}
      >
        <ColorSwatch name="--ui-color-secondary-50" inverseText />
        <ColorSwatch name="--ui-color-secondary-100" inverseText />
        <ColorSwatch name="--ui-color-secondary-200" inverseText />
        <ColorSwatch name="--ui-color-secondary-300" inverseText />
        <ColorSwatch name="--ui-color-secondary-400" inverseText />
        <ColorSwatch name="--ui-color-secondary-500" />
        <ColorSwatch name="--ui-color-secondary-600" />
        <ColorSwatch name="--ui-color-secondary-700" />
        <ColorSwatch name="--ui-color-secondary-800" />
        <ColorSwatch name="--ui-color-secondary-900" />
      </div>

      <h2>Neutral Colors</h2>
      <p style={{ marginBottom: '1rem' }}>
        Grayscale palette for text, borders, backgrounds, and UI elements.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem',
        }}
      >
        <ColorSwatch name="--ui-color-neutral-50" inverseText />
        <ColorSwatch name="--ui-color-neutral-100" inverseText />
        <ColorSwatch name="--ui-color-neutral-200" inverseText />
        <ColorSwatch name="--ui-color-neutral-300" inverseText />
        <ColorSwatch name="--ui-color-neutral-400" inverseText />
        <ColorSwatch name="--ui-color-neutral-500" />
        <ColorSwatch name="--ui-color-neutral-600" />
        <ColorSwatch name="--ui-color-neutral-700" />
        <ColorSwatch name="--ui-color-neutral-800" />
        <ColorSwatch name="--ui-color-neutral-900" />
      </div>

      <h2>Base Colors</h2>
      <p style={{ marginBottom: '1rem' }}>
        Foundational white and black colors.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem',
        }}
      >
        <ColorSwatch name="--ui-color-white" inverseText />
        <ColorSwatch name="--ui-color-black" />
      </div>

      <h2>Danger Colors</h2>
      <p style={{ marginBottom: '1rem' }}>
        Red-based colors for error and destructive actions.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem',
        }}
      >
        <ColorSwatch name="--ui-color-danger-600" />
        <ColorSwatch name="--ui-color-danger-700" />
        <ColorSwatch name="--ui-color-danger-800" />
      </div>

      <h2>Warning Colors</h2>
      <p style={{ marginBottom: '1rem' }}>
        Yellow-based colors for warning states and attention.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem',
        }}
      >
        <ColorSwatch name="--ui-color-warning-50" inverseText />
        <ColorSwatch name="--ui-color-warning-100" inverseText />
        <ColorSwatch name="--ui-color-warning-200" inverseText />
        <ColorSwatch name="--ui-color-warning-600" />
        <ColorSwatch name="--ui-color-warning-700" />
        <ColorSwatch name="--ui-color-warning-800" />
      </div>

      <h2>Success Colors</h2>
      <p style={{ marginBottom: '1rem' }}>
        Green-based colors for success states and confirmations.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '1rem',
        }}
      >
        <ColorSwatch name="--ui-color-success-60" inverseText />
        <ColorSwatch name="--ui-color-success-100" inverseText />
        <ColorSwatch name="--ui-color-success-200" inverseText />
        <ColorSwatch name="--ui-color-success-600" />
        <ColorSwatch name="--ui-color-success-700" />
        <ColorSwatch name="--ui-color-success-800" />
      </div>
    </div>
  ),
};
