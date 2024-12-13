import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage', () => {
  test('should render the HomePage component without error', () => {
    render(<HomePage />);

    expect(screen.getByAltText('Vite logo')).toBeInTheDocument();
    expect(screen.getByAltText('React logo')).toBeInTheDocument();
    expect(screen.getByText('Vite + React')).toBeInTheDocument();
  });
});
