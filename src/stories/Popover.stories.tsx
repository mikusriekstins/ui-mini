import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../components/Button';
import { Popover } from '../components/Popover';
import '../styles/variables.css';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Popover
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        closeButtonText="Close popover"
        popoverTrigger={<Button variant="secondary">Open Popover</Button>}
      >
        <div>
          <h4
            style={{
              margin: '0 0 8px 0',
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-semibold)',
            }}
          >
            Dimensions
          </h4>
          <p
            style={{
              margin: '0 0 12px 0',
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
            }}
          >
            Set the dimensions for the layer.
          </p>
          <div
            style={{
              display: 'grid',
              gap: '8px',
              gridTemplateColumns: '1fr 1fr',
            }}
          >
            <div>
              <label
                style={{
                  fontSize: 'var(--font-size-2xs)',
                  fontWeight: 'var(--font-weight-medium)',
                }}
              >
                Width
              </label>
              <input
                type="text"
                defaultValue="100%"
                style={{
                  width: '100%',
                  padding: '4px 8px',
                  border: '1px solid var(--color-border)',
                  borderRadius: '4px',
                  fontSize: 'var(--font-size-2xs)',
                }}
              />
            </div>
            <div>
              <label
                style={{
                  fontSize: 'var(--font-size-2xs)',
                  fontWeight: 'var(--font-weight-medium)',
                }}
              >
                Height
              </label>
              <input
                type="text"
                defaultValue="25px"
                style={{
                  width: '100%',
                  padding: '4px 8px',
                  border: '1px solid var(--color-border)',
                  borderRadius: '4px',
                  fontSize: 'var(--font-size-2xs)',
                }}
              />
            </div>
          </div>
        </div>
      </Popover>
    );
  },
};

export const SimpleContent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Popover
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        closeButtonText="Close notification"
        popoverTrigger={<Button variant="secondary">Show Notification</Button>}
      >
        <div>
          <h4
            style={{
              margin: '0 0 8px 0',
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-semibold)',
            }}
          >
            Pro Tip
          </h4>
          <p
            style={{
              margin: '0',
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
            }}
          >
            This popover now has a built-in close button with an X icon.
          </p>
        </div>
      </Popover>
    );
  },
};

export const AccountSettings: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Popover
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        closeButtonText="Close settings"
        popoverTrigger={<Button variant="secondary">Account Settings</Button>}
      >
        <div>
          <h4
            style={{
              margin: '0 0 8px 0',
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-semibold)',
            }}
          >
            Account Settings
          </h4>
          <p
            style={{
              margin: '0 0 12px 0',
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
            }}
          >
            Manage your account settings and preferences.
          </p>
          <div
            style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}
          >
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setIsOpen(false)}>
              Save
            </Button>
          </div>
        </div>
      </Popover>
    );
  },
};

export const Positioning: Story = {
  render: () => {
    const [topOpen, setTopOpen] = useState(false);
    const [rightOpen, setRightOpen] = useState(false);
    const [bottomOpen, setBottomOpen] = useState(false);
    const [leftOpen, setLeftOpen] = useState(false);

    return (
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <Popover
          isOpen={topOpen}
          onOpenChange={setTopOpen}
          side="top"
          closeButtonText="Close top popover"
          popoverTrigger={<Button variant="secondary">Top</Button>}
        >
          <div>
            <p style={{ margin: '0', fontSize: 'var(--font-size-xs)' }}>
              Positioned on top
            </p>
          </div>
        </Popover>

        <Popover
          isOpen={rightOpen}
          onOpenChange={setRightOpen}
          side="right"
          closeButtonText="Close right popover"
          popoverTrigger={<Button variant="secondary">Right</Button>}
        >
          <div>
            <p style={{ margin: '0', fontSize: 'var(--font-size-xs)' }}>
              Positioned on right
            </p>
          </div>
        </Popover>

        <Popover
          isOpen={bottomOpen}
          onOpenChange={setBottomOpen}
          side="bottom"
          closeButtonText="Close bottom popover"
          popoverTrigger={<Button variant="secondary">Bottom</Button>}
        >
          <div>
            <p style={{ margin: '0', fontSize: 'var(--font-size-xs)' }}>
              Positioned on bottom
            </p>
          </div>
        </Popover>

        <Popover
          isOpen={leftOpen}
          onOpenChange={setLeftOpen}
          side="left"
          closeButtonText="Close left popover"
          popoverTrigger={<Button variant="secondary">Left</Button>}
        >
          <div>
            <p style={{ margin: '0', fontSize: 'var(--font-size-xs)' }}>
              Positioned on left
            </p>
          </div>
        </Popover>
      </div>
    );
  },
};
