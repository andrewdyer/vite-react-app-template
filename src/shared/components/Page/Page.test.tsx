import { fireEvent, render, screen } from '@testing-library/react';

import Page from './Page';

describe('Page', () => {
  test('should render the Page component', () => {
    render(<Page />);

    expect(screen.getByText('Pages in Storybook')).toBeInTheDocument();
  });

  test('should login the user when onLogin is called', () => {
    render(<Page />);

    fireEvent.click(screen.getByText('Log in'));
    expect(screen.getByText('Welcome, Jane Doe!')).toBeInTheDocument();
  });

  test('should logout the user when onLogout is called', () => {
    render(<Page />);

    fireEvent.click(screen.getByText('Log in'));
    fireEvent.click(screen.getByText('Log out'));
    expect(screen.queryByText('Jane Doe')).not.toBeInTheDocument();
  });

  test('should create an account when onCreateAccount is called', () => {
    render(<Page />);

    fireEvent.click(screen.getByText('Sign up'));
    expect(screen.getByText('Welcome, Jane Doe!')).toBeInTheDocument();
  });
});
