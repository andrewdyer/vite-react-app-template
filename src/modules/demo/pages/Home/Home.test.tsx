import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '@/store';

import Home from './Home';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe('Home', () => {
  test('should render the Home component without error', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(screen.getByAltText('home.viteLogoAlt')).toBeInTheDocument();
    expect(screen.getByAltText('home.reactLogoAlt')).toBeInTheDocument();
    expect(screen.getByText('home.title')).toBeInTheDocument();
    expect(screen.getByText('home.description')).toBeInTheDocument();
  });
});
