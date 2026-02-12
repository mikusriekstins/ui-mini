import {
  forwardRef,
  ReactNode,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ElementType,
  Ref,
} from 'react';

import './Button.css';
import { Icon, IconName } from './Icon';

type BaseButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'large';
  icon?: IconName;
  children?: ReactNode;
};

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
    as?: never;
    to?: never;
  };

type ButtonAsAnchor = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    as?: never;
    to?: never;
  };

type ButtonAsComponent = BaseButtonProps & {
  as: ElementType;
  to: string;
  href?: never;
} & Record<string, unknown>;

export type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsComponent;

const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement | HTMLElement,
  ButtonProps
>(
  (
    {
      className = '',
      variant = 'primary',
      size = 'default',
      icon,
      children,
      ...props
    }: ButtonProps,
    ref
  ) => {
    const sizeClass = size === 'large' ? 'button--large' : '';
    const buttonClasses =
      `button button--${variant} ${sizeClass} ${className}`.trim();

    const content = (
      <>
        {icon && (
          <Icon name={icon as IconName} size="small" className="button__icon" />
        )}
        {children && (
          <span className="button__text">{children as ReactNode}</span>
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
          ref={ref as Ref<HTMLAnchorElement>}
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
        ref={ref as Ref<HTMLButtonElement>}
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
