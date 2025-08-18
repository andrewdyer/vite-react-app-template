import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/utils/testing';

import App from './App';

vi.mock('@/pages', async () => ({
  Home: () => <div data-testid="home-page" />,
}));

describe('App', () => {
  test('should render the Home component when navigating to the root path', () => {
    renderWithProviders(<App />, { initialEntries: ['/'] });

    const homePage = screen.getByTestId('home-page');
    expect(homePage).toBeInTheDocument();
  });
});
