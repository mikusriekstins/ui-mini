import * as React from 'react';
import './Button.css';
import { Icon, IconName } from './Icon';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  icon?: IconName;
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', icon, children, ...props }, ref) => {
    const buttonClasses = `button button--${variant} ${className}`.trim();

    return (
      <button ref={ref} className={buttonClasses} {...props}>
        {icon && <Icon name={icon} size="small" className="button__icon" />}
        {children && <span className="button__text">{children}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
