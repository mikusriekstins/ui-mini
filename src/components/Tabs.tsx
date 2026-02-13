import { Root, List, Trigger, Content } from '@radix-ui/react-tabs';
import {
  forwardRef,
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
  ReactElement,
  FC,
  Children,
} from 'react';
import './Tabs.css';

export interface TabsProps extends ComponentPropsWithoutRef<typeof Root> {
  children: ReactNode;
}

export interface TabItemProps {
  value: string;
  label: ReactNode;
  children: ReactNode;
  disabled?: boolean;
}

const TabsRoot = forwardRef<ElementRef<typeof Root>, TabsProps>(
  ({ className = '', children, ...props }, ref) => (
    <Root ref={ref} className={`tabs ${className}`.trim()} {...props}>
      {children}
    </Root>
  )
);

TabsRoot.displayName = 'TabsRoot';

const TabsList = forwardRef<
  ElementRef<typeof List>,
  ComponentPropsWithoutRef<typeof List>
>(({ className = '', ...props }, ref) => (
  <List ref={ref} className={`tabs__list ${className}`.trim()} {...props} />
));

TabsList.displayName = 'TabsList';

const TabsTrigger = forwardRef<
  ElementRef<typeof Trigger>,
  ComponentPropsWithoutRef<typeof Trigger>
>(({ className = '', ...props }, ref) => (
  <Trigger
    ref={ref}
    className={`tabs__trigger ${className}`.trim()}
    {...props}
  />
));

TabsTrigger.displayName = 'TabsTrigger';

const TabsContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className = '', ...props }, ref) => (
  <Content
    ref={ref}
    className={`tabs__content ${className}`.trim()}
    {...props}
  />
));

TabsContent.displayName = 'TabsContent';

const Tabs = forwardRef<
  ElementRef<typeof Root>,
  Omit<TabsProps, 'children'> & {
    children: ReactElement<TabItemProps> | ReactElement<TabItemProps>[];
  }
>(({ className = '', children, ...props }, ref) => {
  const tabItems = Children.toArray(children) as ReactElement<TabItemProps>[];

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

const TabItem: FC<TabItemProps> = () => {
  return null;
};

TabItem.displayName = 'TabItem';

export { Tabs, TabItem };
