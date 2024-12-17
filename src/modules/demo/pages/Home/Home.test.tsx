import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '@/store';

import Home from './Home';

describe('Home', () => {
  test('should render the Home component without error', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(screen.getByAltText('Vite logo')).toBeInTheDocument();
    expect(screen.getByAltText('React logo')).toBeInTheDocument();
    expect(screen.getByText('Vite + React')).toBeInTheDocument();
  });
});
