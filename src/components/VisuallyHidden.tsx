import { forwardRef, ReactNode } from 'react';
import './VisuallyHidden.css';

export interface VisuallyHiddenProps {
  children: ReactNode;
}

const VisuallyHidden = forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
  ({ children, ...props }, ref) => {
    return (
      <span className="sr-only" ref={ref} {...props}>
        {children}
      </span>
    );
  }
);

VisuallyHidden.displayName = 'VisuallyHidden';

export { VisuallyHidden };
