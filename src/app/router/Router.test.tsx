import { renderWithProviders } from '@/utils/testing';

import { screen } from '@testing-library/react';

import Router from './Router';

vi.mock('@demo/pages', async () => {
  // prettier-ignore
  const actual = await vi.importActual<typeof import('@demo/pages')>('@demo/pages');

  return {
    ...actual,
    Home: () => <div data-testid="mock-home-page" />,
  };
});

describe('Router', () => {
  test('should render the Home component when navigating to the root path', () => {
    renderWithProviders(<Router />, { initialEntries: ['/'] });

    const mockHomePage = screen.getByTestId('mock-home-page');
    expect(mockHomePage).toBeInTheDocument();
  });
});
