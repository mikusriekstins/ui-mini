import * as React from 'react';
import './Loading.css';

export interface LoadingProps extends React.ComponentPropsWithoutRef<'div'> {
  size?: 'small' | 'medium' | 'large';
}

const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
  ({ size = 'medium', className = '', ...props }, ref) => {
    const loadingClasses = `loading loading--${size} ${className}`.trim();

    return <div ref={ref} className={loadingClasses} {...props} />;
  }
);

Loading.displayName = 'Loading';

export { Loading };
