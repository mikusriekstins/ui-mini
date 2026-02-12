import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/Button';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '../components/DropdownMenu';
import '../styles/variables.css';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <DropdownMenu trigger={<Button variant="secondary">Open Menu</Button>}>
      <DropdownMenuItem onClick={() => console.log('Profile clicked')}>
        Profile
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => console.log('Settings clicked')}>
        Settings
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => console.log('Logout clicked')}>
        Logout
      </DropdownMenuItem>
    </DropdownMenu>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <DropdownMenu
      trigger={<Button variant="secondary">Actions</Button>}
      label="My Account"
    >
      <DropdownMenuItem onClick={() => console.log('Profile clicked')}>
        Profile
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => console.log('Settings clicked')}>
        Settings
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => console.log('Logout clicked')}>
        Logout
      </DropdownMenuItem>
    </DropdownMenu>
  ),
};

export const WithDisabledItem: Story = {
  render: () => (
    <DropdownMenu trigger={<Button variant="secondary">File Menu</Button>}>
      <DropdownMenuItem onClick={() => console.log('New file')}>
        New File
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => console.log('Open file')}>
        Open File
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => console.log('Save')} disabled>
        Save (disabled)
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => console.log('Save As')}>
        Save As...
      </DropdownMenuItem>
    </DropdownMenu>
  ),
};

export const MultipleSeparators: Story = {
  render: () => (
    <DropdownMenu
      trigger={<Button variant="secondary">Edit Menu</Button>}
      label="Edit Options"
    >
      <DropdownMenuItem onClick={() => console.log('Cut')}>
        Cut
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => console.log('Copy')}>
        Copy
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => console.log('Paste')}>
        Paste
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => console.log('Select All')}>
        Select All
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => console.log('Find')}>
        Find
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => console.log('Replace')}>
        Replace
      </DropdownMenuItem>
    </DropdownMenu>
  ),
};
