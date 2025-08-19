import type { Meta, StoryObj } from '@storybook/react';
import '../styles/variables.css';

const meta: Meta = {
  title: 'Design System/Typography',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Typography system using Inter font with a modular scale based on Major Second (1.125).',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FontSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h2
          style={{
            marginBottom: '16px',
            fontSize: 'var(--font-size-xl)',
            fontWeight: 'var(--font-weight-semibold)',
          }}
        >
          Font Size Scale
        </h2>
        <p
          style={{
            marginBottom: '24px',
            color: 'var(--color-muted-foreground)',
          }}
        >
          Modular scale based on Major Second (1.125) with 1rem as the base
          size.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
          <span
            style={{
              fontSize: 'var(--font-size-6xl)',
              lineHeight: 'var(--line-height-tight)',
            }}
          >
            The quick brown fox
          </span>
          <code
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
            }}
          >
            --font-size-6xl (2.281rem / 36.48px)
          </code>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
          <span
            style={{
              fontSize: 'var(--font-size-5xl)',
              lineHeight: 'var(--line-height-tight)',
            }}
          >
            The quick brown fox
          </span>
          <code
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
            }}
          >
            --font-size-5xl (2.027rem / 32.43px)
          </code>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
          <span
            style={{
              fontSize: 'var(--font-size-4xl)',
              lineHeight: 'var(--line-height-tight)',
            }}
          >
            The quick brown fox
          </span>
          <code
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
            }}
          >
            --font-size-4xl (1.802rem / 28.83px)
          </code>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
          <span
            style={{
              fontSize: 'var(--font-size-3xl)',
              lineHeight: 'var(--line-height-tight)',
            }}
          >
            The quick brown fox
          </span>
          <code
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
            }}
          >
            --font-size-3xl (1.602rem / 25.63px)
          </code>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
          <span
            style={{
              fontSize: 'var(--font-size-2xl)',
              lineHeight: 'var(--line-height-tight)',
            }}
          >
            The quick brown fox
          </span>
          <code
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
            }}
          >
            --font-size-2xl (1.424rem / 22.78px)
          </code>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
          <span
            style={{
              fontSize: 'var(--font-size-xl)',
              lineHeight: 'var(--line-height-snug)',
            }}
          >
            The quick brown fox
          </span>
          <code
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
            }}
          >
            --font-size-xl (1.266rem / 20.25px)
          </code>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
          <span
            style={{
              fontSize: 'var(--font-size-lg)',
              lineHeight: 'var(--line-height-snug)',
            }}
          >
            The quick brown fox
          </span>
          <code
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
            }}
          >
            --font-size-lg (1.125rem / 18px)
          </code>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
          <span
            style={{
              fontSize: 'var(--font-size-base)',
              lineHeight: 'var(--line-height-normal)',
            }}
          >
            The quick brown fox
          </span>
          <code
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
            }}
          >
            --font-size-base (1rem / 16px) - Base Size
          </code>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
          <span
            style={{
              fontSize: 'var(--font-size-sm)',
              lineHeight: 'var(--line-height-normal)',
            }}
          >
            The quick brown fox
          </span>
          <code
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
            }}
          >
            --font-size-sm (0.889rem / 14.22px)
          </code>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
          <span
            style={{
              fontSize: 'var(--font-size-xs)',
              lineHeight: 'var(--line-height-normal)',
            }}
          >
            The quick brown fox
          </span>
          <code
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
            }}
          >
            --font-size-xs (0.79rem / 12.64px)
          </code>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
          <span
            style={{
              fontSize: 'var(--font-size-2xs)',
              lineHeight: 'var(--line-height-normal)',
            }}
          >
            The quick brown fox
          </span>
          <code
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
            }}
          >
            --font-size-2xs (0.703rem / 11.25px)
          </code>
        </div>
      </div>
    </div>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h2
          style={{
            marginBottom: '16px',
            fontSize: 'var(--font-size-xl)',
            fontWeight: 'var(--font-weight-semibold)',
          }}
        >
          Font Weights
        </h2>
        <p
          style={{
            marginBottom: '24px',
            color: 'var(--color-muted-foreground)',
          }}
        >
          Available font weights for the Inter font family. Only 400 and 700 are
          loaded for performance.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
          <span
            style={{
              fontSize: 'var(--font-size-lg)',
              fontWeight: 'var(--font-weight-light)',
            }}
          >
            The quick brown fox jumps over the lazy dog
          </span>
          <code
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
            }}
          >
            --font-weight-light (400) - Maps to normal
          </code>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
          <span
            style={{
              fontSize: 'var(--font-size-lg)',
              fontWeight: 'var(--font-weight-normal)',
            }}
          >
            The quick brown fox jumps over the lazy dog
          </span>
          <code
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
            }}
          >
            --font-weight-normal (400)
          </code>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
          <span
            style={{
              fontSize: 'var(--font-size-lg)',
              fontWeight: 'var(--font-weight-medium)',
            }}
          >
            The quick brown fox jumps over the lazy dog
          </span>
          <code
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
            }}
          >
            --font-weight-medium (400) - Maps to normal
          </code>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
          <span
            style={{
              fontSize: 'var(--font-size-lg)',
              fontWeight: 'var(--font-weight-semibold)',
            }}
          >
            The quick brown fox jumps over the lazy dog
          </span>
          <code
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
            }}
          >
            --font-weight-semibold (700) - Maps to bold
          </code>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
          <span
            style={{
              fontSize: 'var(--font-size-lg)',
              fontWeight: 'var(--font-weight-bold)',
            }}
          >
            The quick brown fox jumps over the lazy dog
          </span>
          <code
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
            }}
          >
            --font-weight-bold (700)
          </code>
        </div>
      </div>
    </div>
  ),
};

export const LineHeights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h2
          style={{
            marginBottom: '16px',
            fontSize: 'var(--font-size-xl)',
            fontWeight: 'var(--font-weight-semibold)',
          }}
        >
          Line Heights
        </h2>
        <p
          style={{
            marginBottom: '24px',
            color: 'var(--color-muted-foreground)',
          }}
        >
          Available line height options for improved readability.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gap: '24px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        }}
      >
        <div>
          <code
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
              marginBottom: '8px',
              display: 'block',
            }}
          >
            --line-height-none (1)
          </code>
          <p
            style={{
              fontSize: 'var(--font-size-base)',
              lineHeight: 'var(--line-height-none)',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div>
          <code
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
              marginBottom: '8px',
              display: 'block',
            }}
          >
            --line-height-tight (1.25)
          </code>
          <p
            style={{
              fontSize: 'var(--font-size-base)',
              lineHeight: 'var(--line-height-tight)',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div>
          <code
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
              marginBottom: '8px',
              display: 'block',
            }}
          >
            --line-height-snug (1.375)
          </code>
          <p
            style={{
              fontSize: 'var(--font-size-base)',
              lineHeight: 'var(--line-height-snug)',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div>
          <code
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
              marginBottom: '8px',
              display: 'block',
            }}
          >
            --line-height-normal (1.5) - Default
          </code>
          <p
            style={{
              fontSize: 'var(--font-size-base)',
              lineHeight: 'var(--line-height-normal)',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div>
          <code
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
              marginBottom: '8px',
              display: 'block',
            }}
          >
            --line-height-relaxed (1.625)
          </code>
          <p
            style={{
              fontSize: 'var(--font-size-base)',
              lineHeight: 'var(--line-height-relaxed)',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div>
          <code
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
              marginBottom: '8px',
              display: 'block',
            }}
          >
            --line-height-loose (2)
          </code>
          <p
            style={{
              fontSize: 'var(--font-size-base)',
              lineHeight: 'var(--line-height-loose)',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  ),
};

export const LetterSpacing: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h2
          style={{
            marginBottom: '16px',
            fontSize: 'var(--font-size-xl)',
            fontWeight: 'var(--font-weight-semibold)',
          }}
        >
          Letter Spacing
        </h2>
        <p
          style={{
            marginBottom: '24px',
            color: 'var(--color-muted-foreground)',
          }}
        >
          Letter spacing options for fine-tuning text appearance.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <code
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
              marginBottom: '8px',
              display: 'block',
            }}
          >
            --letter-spacing-tighter (-0.05em)
          </code>
          <p
            style={{
              fontSize: 'var(--font-size-lg)',
              letterSpacing: 'var(--letter-spacing-tighter)',
            }}
          >
            The quick brown fox jumps over the lazy dog
          </p>
        </div>

        <div>
          <code
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
              marginBottom: '8px',
              display: 'block',
            }}
          >
            --letter-spacing-tight (-0.025em)
          </code>
          <p
            style={{
              fontSize: 'var(--font-size-lg)',
              letterSpacing: 'var(--letter-spacing-tight)',
            }}
          >
            The quick brown fox jumps over the lazy dog
          </p>
        </div>

        <div>
          <code
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
              marginBottom: '8px',
              display: 'block',
            }}
          >
            --letter-spacing-normal (0em) - Default
          </code>
          <p
            style={{
              fontSize: 'var(--font-size-lg)',
              letterSpacing: 'var(--letter-spacing-normal)',
            }}
          >
            The quick brown fox jumps over the lazy dog
          </p>
        </div>

        <div>
          <code
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
              marginBottom: '8px',
              display: 'block',
            }}
          >
            --letter-spacing-wide (0.025em)
          </code>
          <p
            style={{
              fontSize: 'var(--font-size-lg)',
              letterSpacing: 'var(--letter-spacing-wide)',
            }}
          >
            The quick brown fox jumps over the lazy dog
          </p>
        </div>

        <div>
          <code
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
              marginBottom: '8px',
              display: 'block',
            }}
          >
            --letter-spacing-wider (0.05em)
          </code>
          <p
            style={{
              fontSize: 'var(--font-size-lg)',
              letterSpacing: 'var(--letter-spacing-wider)',
            }}
          >
            The quick brown fox jumps over the lazy dog
          </p>
        </div>

        <div>
          <code
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
              marginBottom: '8px',
              display: 'block',
            }}
          >
            --letter-spacing-widest (0.1em)
          </code>
          <p
            style={{
              fontSize: 'var(--font-size-lg)',
              letterSpacing: 'var(--letter-spacing-widest)',
            }}
          >
            The quick brown fox jumps over the lazy dog
          </p>
        </div>
      </div>
    </div>
  ),
};
