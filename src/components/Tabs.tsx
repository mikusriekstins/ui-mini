import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import './Tabs.css';

export interface TabsProps extends React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Root
> {
  children: React.ReactNode;
}

export interface TabItemProps {
  value: string;
  label: React.ReactNode;
  children: React.ReactNode;
  disabled?: boolean;
}

const TabsRoot = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>(({ className = '', children, ...props }, ref) => (
  <TabsPrimitive.Root
    ref={ref}
    className={`tabs ${className}`.trim()}
    {...props}
  >
    {children}
  </TabsPrimitive.Root>
));

TabsRoot.displayName = 'TabsRoot';

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className = '', ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={`tabs__list ${className}`.trim()}
    {...props}
  />
));

TabsList.displayName = 'TabsList';

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className = '', ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={`tabs__trigger ${className}`.trim()}
    {...props}
  />
));

TabsTrigger.displayName = 'TabsTrigger';

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className = '', ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={`tabs__content ${className}`.trim()}
    {...props}
  />
));

TabsContent.displayName = 'TabsContent';

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  Omit<TabsProps, 'children'> & {
    children:
      | React.ReactElement<TabItemProps>
      | React.ReactElement<TabItemProps>[];
  }
>(({ className = '', children, ...props }, ref) => {
  const tabItems = React.Children.toArray(
    children
  ) as React.ReactElement<TabItemProps>[];

  return (
    <TabsRoot ref={ref} className={className} {...props}>
      <TabsList>
        {tabItems.map((child) => (
          <TabsTrigger
            key={child.props.value}
            value={child.props.value}
            disabled={child.props.disabled}
          >
            {child.props.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabItems.map((child) => (
        <TabsContent key={child.props.value} value={child.props.value}>
          {child.props.children}
        </TabsContent>
      ))}
    </TabsRoot>
  );
});

Tabs.displayName = 'Tabs';

const TabItem: React.FC<TabItemProps> = () => {
  return null;
};

TabItem.displayName = 'TabItem';

export { Tabs, TabItem };
