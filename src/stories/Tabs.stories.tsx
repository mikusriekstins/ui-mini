import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tabs, TabItem } from '../components/Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: { type: 'text' },
      description: 'The default active tab value',
    },
    value: {
      control: { type: 'text' },
      description: 'The controlled active tab value',
    },
    onValueChange: {
      action: 'valueChanged',
      description: 'Callback fired when tab value changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: 'tab1',
    children: [
      <TabItem key="tab1" value="tab1" label="Tab 1">
        <div>
          <h3>Tab 1 Content</h3>
          <p>
            This is the content for the first tab. You can put any React content
            here.
          </p>
        </div>
      </TabItem>,
      <TabItem key="tab2" value="tab2" label="Tab 2">
        <div>
          <h3>Tab 2 Content</h3>
          <p>
            This is the content for the second tab. It can contain forms, lists,
            or any other components.
          </p>
        </div>
      </TabItem>,
      <TabItem key="tab3" value="tab3" label="Tab 3">
        <div>
          <h3>Tab 3 Content</h3>
          <p>
            This is the content for the third tab. Each tab can have completely
            different content.
          </p>
        </div>
      </TabItem>,
    ],
  },
};

export const WithDisabledTab: Story = {
  args: {
    defaultValue: 'profile',
    children: [
      <TabItem key="profile" value="profile" label="Profile">
        <div>
          <h3>Profile Settings</h3>
          <p>Configure your profile information here.</p>
        </div>
      </TabItem>,
      <TabItem key="account" value="account" label="Account" disabled>
        <div>
          <h3>Account Settings</h3>
          <p>This tab is disabled and cannot be accessed.</p>
        </div>
      </TabItem>,
      <TabItem key="preferences" value="preferences" label="Preferences">
        <div>
          <h3>User Preferences</h3>
          <p>Set your application preferences here.</p>
        </div>
      </TabItem>,
    ],
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState('overview');

    return (
      <div style={{ width: '500px' }}>
        <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
          Current active tab: <strong>{activeTab}</strong>
        </p>
        <Tabs {...args} value={activeTab} onValueChange={setActiveTab}>
          <TabItem value="overview" label="Overview">
            <div>
              <h3>Overview</h3>
              <p>
                Welcome to the overview section. This tab is controlled by the
                parent component.
              </p>
              <button
                onClick={() => setActiveTab('details')}
                style={{
                  padding: '8px 16px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Switch to Details
              </button>
            </div>
          </TabItem>
          <TabItem value="details" label="Details">
            <div>
              <h3>Details</h3>
              <p>
                This is the details section. You can programmatically control
                which tab is active.
              </p>
              <button
                onClick={() => setActiveTab('settings')}
                style={{
                  padding: '8px 16px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Switch to Settings
              </button>
            </div>
          </TabItem>
          <TabItem value="settings" label="Settings">
            <div>
              <h3>Settings</h3>
              <p>
                Configure your settings here. The parent component has full
                control over tab switching.
              </p>
              <button
                onClick={() => setActiveTab('overview')}
                style={{
                  padding: '8px 16px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Back to Overview
              </button>
            </div>
          </TabItem>
        </Tabs>
      </div>
    );
  },
};

export const WithManyTabs: Story = {
  args: {
    defaultValue: 'tab1',
    children: [
      <TabItem key="tab1" value="tab1" label="Dashboard">
        <div>
          <h3>Dashboard</h3>
          <p>Overview of all your data and metrics.</p>
        </div>
      </TabItem>,
      <TabItem key="tab2" value="tab2" label="Analytics">
        <div>
          <h3>Analytics</h3>
          <p>Detailed analytics and reporting.</p>
        </div>
      </TabItem>,
      <TabItem key="tab3" value="tab3" label="Users">
        <div>
          <h3>Users</h3>
          <p>Manage user accounts and permissions.</p>
        </div>
      </TabItem>,
      <TabItem key="tab4" value="tab4" label="Settings">
        <div>
          <h3>Settings</h3>
          <p>Configure application settings.</p>
        </div>
      </TabItem>,
      <TabItem key="tab5" value="tab5" label="Integrations">
        <div>
          <h3>Integrations</h3>
          <p>Manage third-party integrations.</p>
        </div>
      </TabItem>,
      <TabItem key="tab6" value="tab6" label="Support">
        <div>
          <h3>Support</h3>
          <p>Get help and contact support.</p>
        </div>
      </TabItem>,
    ],
  },
};

export const WithComplexContent: Story = {
  args: {
    defaultValue: 'form',
    children: [
      <TabItem key="form" value="form" label="Contact Form">
        <div style={{ maxWidth: '400px' }}>
          <h3>Contact Us</h3>
          <form
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            <div>
              <label
                htmlFor="name"
                style={{ display: 'block', marginBottom: '4px' }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                style={{ display: 'block', marginBottom: '4px' }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                style={{ display: 'block', marginBottom: '4px' }}
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  resize: 'vertical',
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                padding: '12px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </TabItem>,
      <TabItem key="info" value="info" label="Information">
        <div>
          <h3>Company Information</h3>
          <ul style={{ lineHeight: '1.6' }}>
            <li>
              <strong>Address:</strong> 123 Main Street, City, State 12345
            </li>
            <li>
              <strong>Phone:</strong> (555) 123-4567
            </li>
            <li>
              <strong>Email:</strong> contact@company.com
            </li>
            <li>
              <strong>Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM
            </li>
          </ul>
        </div>
      </TabItem>,
      <TabItem key="faq" value="faq" label="FAQ">
        <div>
          <h3>Frequently Asked Questions</h3>
          <div style={{ marginBottom: '16px' }}>
            <h4>How do I create an account?</h4>
            <p>
              You can create an account by clicking the "Sign Up" button and
              filling out the registration form.
            </p>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <h4>What payment methods do you accept?</h4>
            <p>We accept all major credit cards, PayPal, and bank transfers.</p>
          </div>
          <div>
            <h4>How can I contact support?</h4>
            <p>
              You can reach our support team through the contact form, email, or
              phone during business hours.
            </p>
          </div>
        </div>
      </TabItem>,
    ],
  },
};
