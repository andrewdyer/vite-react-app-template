import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Router from './Router';

vi.mock('@demo/pages', () => ({
  HomePage: () => <div data-testid="mock-home-page">Home</div>,
}));

describe('Router', () => {
  test('renders HomePage for the root path', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Router />
      </MemoryRouter>
    );

    expect(screen.getByTestId('mock-home-page')).toBeInTheDocument();
  });
});
