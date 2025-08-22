import * as React from 'react';
import './Button.css';
import { Icon, IconName } from './Icon';

type BaseButtonProps = {
  variant?: 'primary' | 'secondary';
  icon?: IconName;
  children?: React.ReactNode;
};

export type ButtonProps = BaseButtonProps &
  (
    | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
    | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  );

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ className = '', variant = 'primary', icon, children, ...props }, ref) => {
  const buttonClasses = `button button--${variant} ${className}`.trim();

  const content = (
    <>
      {icon && <Icon name={icon} size="small" className="button__icon" />}
      {children && <span className="button__text">{children}</span>}
    </>
  );

  if ('href' in props && props.href) {
    const { href, ...anchorProps } = props;
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

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={buttonClasses}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };
