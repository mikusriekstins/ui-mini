import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../components/Button';
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
              <Button onClick={() => setActiveTab('details')}>
                Switch to Details
              </Button>
            </div>
          </TabItem>
          <TabItem value="details" label="Details">
            <div>
              <h3>Details</h3>
              <p>
                This is the details section. You can programmatically control
                which tab is active.
              </p>
              <Button onClick={() => setActiveTab('settings')}>
                Switch to Settings
              </Button>
            </div>
          </TabItem>
          <TabItem value="settings" label="Settings">
            <div>
              <h3>Settings</h3>
              <p>
                Configure your settings here. The parent component has full
                control over tab switching.
              </p>
              <Button onClick={() => setActiveTab('overview')}>
                Back to Overview
              </Button>
            </div>
          </TabItem>
        </Tabs>
      </div>
    );
  },
};
