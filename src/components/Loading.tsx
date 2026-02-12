import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import './Loading.css';

export interface LoadingProps extends ComponentPropsWithoutRef<'div'> {
  size?: 'small' | 'medium' | 'large';
}

const Loading = forwardRef<HTMLDivElement, LoadingProps>(
  ({ size = 'medium', className = '', ...props }, ref) => {
    const loadingClasses = `loading ${className}`.trim();
    const spinnerSize = `loading--${size}`;

    return (
      <div ref={ref} className={`${loadingClasses} ${spinnerSize}`} {...props}>
        <div className="spinner" />
      </div>
    );
  }
);

Loading.displayName = 'Loading';

export { Loading };
