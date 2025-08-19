import React from 'react';
import './Alert.css';

interface AlertProps extends React.ComponentPropsWithoutRef<'div'> {
  variant?: 'default' | 'success' | 'error' | 'warning';
  message: string;
  description?: string;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({
  variant = 'default',
  message,
  description,
  onClose,
  ...props
}) => {
  return (
    <div 
      className={`alert alert-${variant} ${props.className || ''}`}
      {...props}
    >
      <div className="alert-content">
        <div className="alert-message">{message}</div>
        {description && <div className="alert-description">{description}</div>}
      </div>
      {onClose && (
        <button 
          className="alert-close-button"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;