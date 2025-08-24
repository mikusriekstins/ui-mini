import * as React from 'react';
import './Button.css';
import { Icon, IconName } from './Icon';

type BaseButtonProps = {
  variant?: 'primary' | 'secondary';
  icon?: IconName;
  children?: React.ReactNode;
};

type ButtonAsButton = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
    as?: never;
    to?: never;
  };

type ButtonAsAnchor = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    as?: never;
    to?: never;
  };

type ButtonAsComponent = BaseButtonProps & {
  as: React.ElementType;
  to: string;
  href?: never;
} & Record<string, unknown>;

export type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsComponent;

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement | HTMLElement,
  ButtonProps
>(
  (
    {
      className = '',
      variant = 'primary',
      icon,
      children,
      ...props
    }: ButtonProps,
    ref
  ) => {
    const buttonClasses = `button button--${variant} ${className}`.trim();

    const content = (
      <>
        {icon && (
          <Icon name={icon as IconName} size="small" className="button__icon" />
        )}
        {children && (
          <span className="button__text">{children as React.ReactNode}</span>
        )}
      </>
    );

    if ('as' in props && 'to' in props) {
      const {
        as: Component,
        to,
        ...componentProps
      } = props as ButtonAsComponent;
      return (
        <Component
          ref={ref}
          className={buttonClasses}
          to={to}
          {...componentProps}
        >
          {content}
        </Component>
      );
    }

    if ('href' in props && props.href) {
      const { href, ...anchorProps } = props as ButtonAsAnchor;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={buttonClasses}
          href={href}
          {...anchorProps}
        >
          {content}
        </a>
      );
    }

    const buttonProps = props as ButtonAsButton;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={buttonClasses}
        {...buttonProps}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
