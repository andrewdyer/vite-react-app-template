import { fireEvent, render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  test('should render the App component without error', () => {
    render(<App />);

    expect(screen.getByAltText('Vite logo')).toBeInTheDocument();
    expect(screen.getByAltText('React logo')).toBeInTheDocument();
    expect(screen.getByText('Vite + React')).toBeInTheDocument();
  });

  test('should increment the counter when the button is clicked', () => {
    render(<App />);

    expect(screen.getByText('count is 0')).toBeInTheDocument();

    const button = screen.getByText(/count is \d/);

    fireEvent.click(button);
    expect(screen.getByText('count is 1')).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByText('count is 2')).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByText('count is 3')).toBeInTheDocument();
  });
});
