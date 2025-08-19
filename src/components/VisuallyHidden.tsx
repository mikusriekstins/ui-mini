import * as React from 'react';
import './VisuallyHidden.css';

export interface VisuallyHiddenProps {
  children: React.ReactNode;
}

const VisuallyHidden = React.forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
  ({ children, ...props }) => {
    return (
      <span className="sr-only" {...props}>
        {children}
      </span>
    );
  }
);

VisuallyHidden.displayName = 'VisuallyHidden';

export { VisuallyHidden };
