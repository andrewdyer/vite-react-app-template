import { render, screen, fireEvent } from '@testing-library/react';

import Header, { type HeaderProps } from './Header';

describe('Header', () => {
  const defaultProps: HeaderProps = {
    onLogin: vi.fn(),
    onLogout: vi.fn(),
    onCreateAccount: vi.fn(),
  };

  test('should render the logo and title', () => {
    render(<Header {...defaultProps} />);

    expect(screen.getByText('Acme')).toBeInTheDocument();
  });

  test('should render login and signup buttons when user is not logged in', () => {
    render(<Header {...defaultProps} />);

    expect(screen.getByText('Log in')).toBeInTheDocument();
    expect(screen.getByText('Sign up')).toBeInTheDocument();
  });

  test('should render welcome message and logout button when user is logged in', () => {
    const user = { name: 'John Doe' };

    render(<Header {...defaultProps} user={user} />);

    expect(screen.getByText('Welcome, John Doe!')).toBeInTheDocument();
    expect(screen.getByText('Log out')).toBeInTheDocument();
  });

  test('should call onLogin when login button is clicked', () => {
    render(<Header {...defaultProps} />);

    fireEvent.click(screen.getByText('Log in'));
    expect(defaultProps.onLogin).toHaveBeenCalled();
  });

  test('should call onLogout when logout button is clicked', () => {
    const user = { name: 'John Doe' };

    render(<Header {...defaultProps} user={user} />);

    fireEvent.click(screen.getByText('Log out'));
    expect(defaultProps.onLogout).toHaveBeenCalled();
  });

  test('should call onCreateAccount when signup button is clicked', () => {
    render(<Header {...defaultProps} />);

    fireEvent.click(screen.getByText('Sign up'));
    expect(defaultProps.onCreateAccount).toHaveBeenCalled();
  });
});
