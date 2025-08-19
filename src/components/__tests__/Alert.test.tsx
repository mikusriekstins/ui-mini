import { render, screen, fireEvent } from '@testing-library/react';

describe('Alert Component', () => {
  test('renders alert with message and description', () => {
    render(
      <Alert 
        variant="success" 
        message="Success message"
        description="This is a success description"
      />
    );
    
    expect(screen.getByText('Success message')).toBeInTheDocument();
    expect(screen.getByText('This is a success description')).toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    render(
      <Alert 
        variant="error" 
        message="Error message"
        onClose={onClose}
      />
    );
    
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    expect(onClose).toHaveBeenCalled();
  });

  test('does not render close button when onClose is not provided', () => {
    render(
      <Alert 
        variant="warning" 
        message="Warning message"
      />
    );
    
    expect(screen.queryByRole('button')).toBeNull();
  });
});

