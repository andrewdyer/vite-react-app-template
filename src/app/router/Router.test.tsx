import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Router from './Router';

vi.mock('@demo/pages', async () => {
  // prettier-ignore
  const actual = await vi.importActual<typeof import('@demo/pages')>('@demo/pages');

  return {
    ...actual,
    Home: () => <div data-testid="mock-home-page" />,
  };
});

const renderComponent = (initialEntries: string[] = ['/']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <Router />
    </MemoryRouter>
  );
};

describe('Router', () => {
  test('should render the Home component when navigating to the root path', () => {
    renderComponent();

    const mockHomePage = screen.getByTestId('mock-home-page');
    expect(mockHomePage).toBeInTheDocument();
  });
});
