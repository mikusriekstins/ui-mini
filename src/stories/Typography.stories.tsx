import type { Meta, StoryObj } from '@storybook/react';
import '../styles/variables.css';

const meta: Meta = {
  title: 'Design System/Typography',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Typography system using Inter font with a modular scale based on Major Third (1.25).',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FontSizes: Story = {
  render: () => (
    <div>
      <h2>Font Size Scale</h2>
      <p>
        Modular scale based on Major Third (1.25) with 18px (1.125rem) as the
        base size.
      </p>

      <div>
        <div>
          <span
            style={{
              fontSize: 'var(--font-size-xxxl)',
              lineHeight: 'var(--line-height-sm)',
            }}
          >
            The quick brown fox
          </span>
          <code>--font-size-xxxl (2.746rem / 43.94px)</code>
        </div>

        <div>
          <span
            style={{
              fontSize: 'var(--font-size-xxl)',
              lineHeight: 'var(--line-height-sm)',
            }}
          >
            The quick brown fox
          </span>
          <code>--font-size-xxl (2.197rem / 35.16px)</code>
        </div>

        <div>
          <span
            style={{
              fontSize: 'var(--font-size-xl)',
              lineHeight: 'var(--line-height-sm)',
            }}
          >
            The quick brown fox
          </span>
          <code>--font-size-xl (1.758rem / 28.13px)</code>
        </div>

        <div>
          <span
            style={{
              fontSize: 'var(--font-size-lg)',
              lineHeight: 'var(--line-height-md)',
            }}
          >
            The quick brown fox
          </span>
          <code>--font-size-lg (1.406rem / 22.5px)</code>
        </div>

        <div>
          <span
            style={{
              fontSize: 'var(--font-size-md)',
              lineHeight: 'var(--line-height-md)',
            }}
          >
            The quick brown fox
          </span>
          <code>--font-size-md (1.125rem / 18px) - Base Size</code>
        </div>

        <div>
          <span
            style={{
              fontSize: 'var(--font-size-sm)',
              lineHeight: 'var(--line-height-md)',
            }}
          >
            The quick brown fox
          </span>
          <code>--font-size-sm (0.9rem / 14.4px)</code>
        </div>

        <div>
          <span
            style={{
              fontSize: 'var(--font-size-xs)',
              lineHeight: 'var(--line-height-md)',
            }}
          >
            The quick brown fox
          </span>
          <code>--font-size-xs (0.72rem / 11.52px)</code>
        </div>

        <div>
          <span
            style={{
              fontSize: 'var(--font-size-xss)',
              lineHeight: 'var(--line-height-md)',
            }}
          >
            The quick brown fox
          </span>
          <code>--font-size-xss (0.576rem / 9.22px)</code>
        </div>
      </div>
    </div>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <div>
      <h2>Font Weights</h2>
      <p>
        Available font weights for the Inter font family. Only 400 and 700 are
        loaded for performance.
      </p>

      <div>
        <div>
          <span
            style={{
              fontSize: 'var(--font-size-lg)',
              fontWeight: 'var(--font-weight-light)',
            }}
          >
            The quick brown fox jumps over the lazy dog
          </span>
          <code>--font-weight-light (400) - Maps to normal</code>
        </div>

        <div>
          <span
            style={{
              fontSize: 'var(--font-size-lg)',
              fontWeight: 'var(--font-weight-normal)',
            }}
          >
            The quick brown fox jumps over the lazy dog
          </span>
          <code>--font-weight-normal (400)</code>
        </div>

        <div>
          <span
            style={{
              fontSize: 'var(--font-size-lg)',
              fontWeight: 'var(--font-weight-medium)',
            }}
          >
            The quick brown fox jumps over the lazy dog
          </span>
          <code>--font-weight-medium (400) - Maps to normal</code>
        </div>

        <div>
          <span
            style={{
              fontSize: 'var(--font-size-lg)',
              fontWeight: 'var(--font-weight-semibold)',
            }}
          >
            The quick brown fox jumps over the lazy dog
          </span>
          <code>--font-weight-semibold (700) - Maps to bold</code>
        </div>

        <div>
          <span
            style={{
              fontSize: 'var(--font-size-lg)',
              fontWeight: 'var(--font-weight-bold)',
            }}
          >
            The quick brown fox jumps over the lazy dog
          </span>
          <code>--font-weight-bold (700)</code>
        </div>
      </div>
    </div>
  ),
};

export const LineHeights: Story = {
  render: () => (
    <div>
      <h2>Line Heights</h2>
      <p>Simplified 3-size line height system for improved consistency.</p>

      <div>
        <div>
          <code>--line-height-sm (1.25) - Tight</code>
          <p
            style={{
              fontSize: 'var(--font-size-md)',
              lineHeight: 'var(--line-height-sm)',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Used for
            buttons, tabs, and compact UI elements.
          </p>
        </div>

        <div>
          <code>--line-height-md (1.5) - Default</code>
          <p
            style={{
              fontSize: 'var(--font-size-md)',
              lineHeight: 'var(--line-height-md)',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Used for
            body text and most UI components.
          </p>
        </div>

        <div>
          <code>--line-height-lg (1.625) - Relaxed</code>
          <p
            style={{
              fontSize: 'var(--font-size-md)',
              lineHeight: 'var(--line-height-lg)',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Used for
            improved readability in longer text content.
          </p>
        </div>
      </div>
    </div>
  ),
};

export const LetterSpacing: Story = {
  render: () => (
    <div>
      <h2>Letter Spacing</h2>
      <p>
        Simplified letter spacing system with small, medium, and large options.
      </p>

      <div>
        <div>
          <code>--letter-spacing-sm (-0.025em)</code>
          <p
            style={{
              fontSize: 'var(--font-size-lg)',
              letterSpacing: 'var(--letter-spacing-sm)',
            }}
          >
            The quick brown fox jumps over the lazy dog
          </p>
        </div>

        <div>
          <code>--letter-spacing-md (0em) - Default</code>
          <p
            style={{
              fontSize: 'var(--font-size-lg)',
              letterSpacing: 'var(--letter-spacing-md)',
            }}
          >
            The quick brown fox jumps over the lazy dog
          </p>
        </div>

        <div>
          <code>--letter-spacing-lg (0.025em)</code>
          <p
            style={{
              fontSize: 'var(--font-size-lg)',
              letterSpacing: 'var(--letter-spacing-lg)',
            }}
          >
            The quick brown fox jumps over the lazy dog
          </p>
        </div>
      </div>
    </div>
  ),
};
