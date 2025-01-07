import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Router from './Router';

vi.mock('@demo/pages', () => {
  const actual = vi.importActual('@demo/pages');
  return {
    ...actual,
    Home: () => <div data-testid="mock-home-page" />,
  };
});

describe('Router', () => {
  test('should render Home for the root path', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Router />
      </MemoryRouter>
    );

    expect(screen.getByTestId('mock-home-page')).toBeInTheDocument();
  });
});
