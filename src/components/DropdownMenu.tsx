import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import './DropdownMenu.css';

interface DropdownMenuProps {
  trigger: React.ReactNode;
  label?: string;
  children: React.ReactNode;
}

const DropdownMenu = ({ trigger, label, children }: DropdownMenuProps) => {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild className="dropdown-menu__trigger">
        {trigger}
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          className="dropdown-menu__content"
          sideOffset={4}
        >
          {label && (
            <>
              <div className="dropdown-menu__label">{label}</div>
              <DropdownMenuPrimitive.Separator className="dropdown-menu__separator" />
            </>
          )}
          {children}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
};
DropdownMenu.displayName = 'DropdownMenu';

interface DropdownMenuItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  DropdownMenuItemProps
>(({ className = '', onClick, children, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={`dropdown-menu__item ${className}`.trim()}
    onSelect={onClick}
    asChild
    {...props}
  >
    <button type="button">{children}</button>
  </DropdownMenuPrimitive.Item>
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className = '', ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={`dropdown-menu__separator ${className}`.trim()}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

export { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator };

export type { DropdownMenuProps, DropdownMenuItemProps };

export type DropdownMenuSeparatorProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Separator
>;
