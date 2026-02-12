import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../components/Button';
import { Dialog } from '../components/Dialog';
import '../styles/variables.css';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Dialog
        trigger={<Button variant="primary">Open Dialog</Button>}
        closeButtonText="Close dialog"
        title="Are you absolutely sure?"
        description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
        onOpenChange={setOpen}
        open={open}
      >
        <div className="dialog__footer">
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setOpen(false)}>
            Continue
          </Button>
        </div>
      </Dialog>
    );
  },
};

export const WithForm: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Dialog
        trigger={<Button variant="primary">Edit Profile</Button>}
        closeButtonText="Close dialog"
        title="Edit profile"
        description="Make changes to your profile here. Click save when you're done."
        onOpenChange={setOpen}
        open={open}
      >
        <div style={{ display: 'grid', gap: '16px', paddingBlock: '16px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 3fr',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <label
              htmlFor="name"
              style={{
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
              }}
            >
              Name
            </label>
            <input
              id="name"
              defaultValue="Pedro Duarte"
              style={{
                padding: '8px 12px',
                border: '1px solid var(--color-border)',
                borderRadius: '6px',
                fontSize: 'var(--font-size-sm)',
              }}
            />
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 3fr',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <label
              htmlFor="username"
              style={{
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
              }}
            >
              Username
            </label>
            <input
              id="username"
              defaultValue="@peduarte"
              style={{
                padding: '8px 12px',
                border: '1px solid var(--color-border)',
                borderRadius: '6px',
                fontSize: 'var(--font-size-sm)',
              }}
            />
          </div>
        </div>
        <div className="dialog__footer">
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setOpen(false)}>
            Save changes
          </Button>
        </div>
      </Dialog>
    );
  },
};

export const ConfirmationDialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Dialog
        trigger={<Button variant="primary">Delete Account</Button>}
        closeButtonText="Close dialog"
        title="Delete Account"
        description="Are you sure you want to delete your account? This action is permanent and cannot be undone. All your data will be permanently removed from our servers."
        onOpenChange={setOpen}
        open={open}
      >
        <div
          style={{
            padding: '16px',
            backgroundColor: 'var(--color-muted)',
            borderRadius: '6px',
            marginBlock: '16px',
          }}
        >
          <p
            style={{
              margin: '0',
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
              fontWeight: 'var(--font-weight-medium)',
            }}
          >
            ⚠️ This action will:
          </p>
          <ul
            style={{
              margin: '8px 0 0 0',
              paddingLeft: '16px',
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
            }}
          >
            <li>Delete all your projects and files</li>
            <li>Cancel your subscription</li>
            <li>Remove you from all teams</li>
          </ul>
        </div>
        <div className="dialog__footer">
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            variant="primary"
            style={{ backgroundColor: '#dc2626' }}
            onClick={() => setOpen(false)}
          >
            Delete Account
          </Button>
        </div>
      </Dialog>
    );
  },
};

export const LongContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Dialog
        trigger={<Button variant="primary">Terms & Conditions</Button>}
        closeButtonText="Close dialog"
        title="Terms and Conditions"
        description="Please read and accept our terms and conditions."
        onOpenChange={setOpen}
        open={open}
      >
        <div
          style={{
            maxHeight: '300px',
            overflowY: 'auto',
            paddingBlock: '16px',
          }}
        >
          <div
            style={{
              fontSize: 'var(--font-size-sm)',
              lineHeight: '1.5',
              color: 'var(--color-foreground)',
            }}
          >
            <h3>1. Introduction</h3>
            <p>
              Welcome to our service. These terms and conditions outline the
              rules and regulations for the use of our website and services. By
              accessing this website, we assume you accept these terms and
              conditions in full.
            </p>

            <h3>2. Use License</h3>
            <p>
              Permission is granted to temporarily download one copy of the
              materials for personal, non-commercial transitory viewing only.
              This is the grant of a license, not a transfer of title, and under
              this license you may not modify or copy the materials.
            </p>

            <h3>3. Disclaimer</h3>
            <p>
              The materials on our website are provided on an 'as is' basis. To
              the fullest extent permitted by law, this Company excludes all
              representations, warranties, conditions and terms whether express
              or implied.
            </p>

            <h3>4. Limitations</h3>
            <p>
              In no event shall our company or its suppliers be liable for any
              damages including, without limitation, damages for loss of data or
              profit, or due to business interruption arising out of the use or
              inability to use the materials on our website.
            </p>
          </div>
        </div>
        <div className="dialog__footer">
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Decline
          </Button>
          <Button variant="primary" onClick={() => setOpen(false)}>
            Accept
          </Button>
        </div>
      </Dialog>
    );
  },
};
