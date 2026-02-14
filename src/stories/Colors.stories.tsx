import type { Meta, StoryObj } from '@storybook/react';
import '../styles/variables.css';

const meta: Meta = {
  title: 'Design System/Colors',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Color system using CSS custom properties for consistent theming. Includes primary, secondary, gray, and semantic colors.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const ColorSwatch = ({
  name,
  value,
  inverseText,
}: {
  name: string;
  value: string;
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
        backgroundColor: value,
        color: inverseText ? '#333' : '#fff',
        fontFamily: 'var(--font-family-sans)',
        fontSize: 'var(--font-size-xs)',
        minWidth: '120px',
        minHeight: '100px',
      }}
    >
      <span
        style={{
          fontWeight: 'var(--font-weight-medium)',
          fontSize: 'var(--font-size-sm)',
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
      <h1>Colors</h1>
      <p style={{ marginBottom: '2rem', maxWidth: '600px' }}>
        The color system uses CSS custom properties for consistent theming
        across light and dark modes. All colors are accessible and follow
        contrast guidelines.
      </p>

      <h2>Primary Colors</h2>
      <p
        style={{ marginBottom: '1rem', color: 'var(--color-muted-foreground)' }}
      >
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
        <ColorSwatch name="--color-primary-50" value="#f0f9ff" inverseText />
        <ColorSwatch name="--color-primary-100" value="#e0f2fe" inverseText />
        <ColorSwatch name="--color-primary-200" value="#bae6fd" inverseText />
        <ColorSwatch name="--color-primary-300" value="#7dd3fc" inverseText />
        <ColorSwatch name="--color-primary-400" value="#38bdf8" inverseText />
        <ColorSwatch name="--color-primary-500" value="#0ea5e9" />
        <ColorSwatch name="--color-primary-600" value="#003041" />
        <ColorSwatch name="--color-primary-700" value="#00283a" />
        <ColorSwatch name="--color-primary-800" value="#002032" />
        <ColorSwatch name="--color-primary-900" value="#001829" />
      </div>

      <h2>Secondary Colors</h2>
      <p
        style={{ marginBottom: '1rem', color: 'var(--color-muted-foreground)' }}
      >
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
        <ColorSwatch name="--color-secondary-50" value="#fef6f2" inverseText />
        <ColorSwatch name="--color-secondary-100" value="#feede3" inverseText />
        <ColorSwatch name="--color-secondary-200" value="#fddac2" inverseText />
        <ColorSwatch name="--color-secondary-300" value="#fbbf96" inverseText />
        <ColorSwatch name="--color-secondary-400" value="#f89a5e" inverseText />
        <ColorSwatch name="--color-secondary-500" value="#f57c35" />
        <ColorSwatch name="--color-secondary-600" value="#cf4d1b" />
        <ColorSwatch name="--color-secondary-700" value="#b8421a" />
        <ColorSwatch name="--color-secondary-800" value="#99361a" />
        <ColorSwatch name="--color-secondary-900" value="#7b2e19" />
      </div>

      <h2>Gray Colors (Light Theme)</h2>
      <p
        style={{ marginBottom: '1rem', color: 'var(--color-muted-foreground)' }}
      >
        Neutral gray scale for text, borders, backgrounds, and other UI elements
        in light mode.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem',
        }}
      >
        <ColorSwatch name="--color-gray-50" value="#f9fafb" inverseText />
        <ColorSwatch name="--color-gray-100" value="#f3f4f6" inverseText />
        <ColorSwatch name="--color-gray-200" value="#e5e7eb" inverseText />
        <ColorSwatch name="--color-gray-300" value="#d1d5db" inverseText />
        <ColorSwatch name="--color-gray-400" value="#9ca3af" inverseText />
        <ColorSwatch name="--color-gray-500" value="#6b7280" />
        <ColorSwatch name="--color-gray-600" value="#4b5563" />
        <ColorSwatch name="--color-gray-700" value="#374151" />
        <ColorSwatch name="--color-gray-800" value="#1f2937" />
        <ColorSwatch name="--color-gray-900" value="#111827" />
      </div>

      <h2>Semantic Colors</h2>
      <p
        style={{ marginBottom: '1rem', color: 'var(--color-muted-foreground)' }}
      >
        Specialized colors for specific purposes like white, black, and danger
        states.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '1rem',
        }}
      >
        <ColorSwatch name="--color-white" value="#ffffff" inverseText />
        <ColorSwatch name="--color-black" value="#000000" />
        <ColorSwatch name="--danger-color" value="#ef4444" />
        <ColorSwatch name="--danger-color-hover" value="#dc2626" />
      </div>
    </div>
  ),
};
