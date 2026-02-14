import { Root, List, Trigger, Content } from '@radix-ui/react-tabs';
import {
  forwardRef,
  ComponentPropsWithoutRef,
  ComponentRef,
  ReactNode,
  ReactElement,
  FC,
  Children,
} from 'react';

import './Tabs.css';
import { Icon, IconName } from './Icon';

export interface TabsProps extends ComponentPropsWithoutRef<typeof Root> {
  children: ReactNode;
}

export interface TabItemProps extends ComponentPropsWithoutRef<'div'> {
  value: string;
  label: ReactNode;
  children: ReactNode;
  disabled?: boolean;
  icon?: IconName;
}

const TabsRoot = forwardRef<ComponentRef<typeof Root>, TabsProps>(
  ({ className = '', children, ...props }, ref) => (
    <Root ref={ref} className={`tabs ${className}`.trim()} {...props}>
      {children}
    </Root>
  )
);

TabsRoot.displayName = 'TabsRoot';

const TabsList = forwardRef<
  ComponentRef<typeof List>,
  ComponentPropsWithoutRef<typeof List>
>(({ className = '', ...props }, ref) => (
  <List ref={ref} className={`tabs__list ${className}`.trim()} {...props} />
));

TabsList.displayName = 'TabsList';

const TabsTrigger = forwardRef<
  ComponentRef<typeof Trigger>,
  ComponentPropsWithoutRef<typeof Trigger> & { icon?: IconName }
>(({ className = '', icon, ...props }, ref) => (
  <Trigger ref={ref} className={`tabs__trigger ${className}`.trim()} {...props}>
    {icon && <Icon name={icon} size="small" className="tabs__icon" />}
    {props.children && <span className="tabs__text">{props.children}</span>}
  </Trigger>
));

TabsTrigger.displayName = 'TabsTrigger';

const TabsContent = forwardRef<
  ComponentRef<typeof Content>,
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
  ComponentRef<typeof Root>,
  Omit<TabsProps, 'children'> & {
    children: ReactElement<TabItemProps> | ReactElement<TabItemProps>[];
  }
>(({ className = '', children, ...props }, ref) => {
  const tabItems = Children.toArray(children) as ReactElement<TabItemProps>[];

  return (
    <TabsRoot ref={ref} className={className} {...props}>
      <TabsList>
        {tabItems.map((child, index) => (
          <TabsTrigger
            key={index}
            value={child.props.value}
            disabled={child.props.disabled}
            data-disabled={child.props.disabled}
            icon={child.props.icon}
          >
            {child.props.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabItems.map((child, index) => (
        <TabsContent key={index} value={child.props.value}>
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

export { Tabs, TabItem, TabsRoot, TabsList, TabsTrigger, TabsContent };
