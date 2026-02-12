import {
  Root,
  Trigger,
  Portal,
  Content,
  Separator,
  Item,
} from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';
import type { ElementRef, ComponentPropsWithoutRef, ReactNode } from 'react';
import './DropdownMenu.css';

interface DropdownMenuProps {
  trigger: ReactNode;
  label?: string;
  children: ReactNode;
}

const DropdownMenu = ({
  trigger,
  label,
  children,
}: DropdownMenuProps): React.ReactNode => {
  return (
    <Root>
      <Trigger asChild className="dropdown-menu__trigger">
        {trigger}
      </Trigger>
      <Portal>
        <Content className="dropdown-menu__content" sideOffset={4}>
          {label && (
            <>
              <div className="dropdown-menu__label">{label}</div>
              <Separator className="dropdown-menu__separator" />
            </>
          )}
          {children}
        </Content>
      </Portal>
    </Root>
  );
};
DropdownMenu.displayName = 'DropdownMenu';

interface DropdownMenuItemProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const DropdownMenuItem = forwardRef<
  ElementRef<typeof Item>,
  DropdownMenuItemProps
>(({ className = '', onClick, children, ...props }, ref) => (
  <Item
    ref={ref}
    className={`dropdown-menu__item ${className}`.trim()}
    onSelect={onClick}
    asChild
    {...props}
  >
    <button type="button">{children}</button>
  </Item>
));
DropdownMenuItem.displayName = Item.displayName;

const DropdownMenuSeparator = forwardRef<
  ElementRef<typeof Separator>,
  ComponentPropsWithoutRef<typeof Separator>
>(({ className = '', ...props }, ref) => (
  <Separator
    ref={ref}
    className={`dropdown-menu__separator ${className}`.trim()}
    {...props}
  />
));
DropdownMenuSeparator.displayName = Separator.displayName;

export { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator };

export type { DropdownMenuProps, DropdownMenuItemProps };

export type DropdownMenuSeparatorProps = ComponentPropsWithoutRef<
  typeof Separator
>;
