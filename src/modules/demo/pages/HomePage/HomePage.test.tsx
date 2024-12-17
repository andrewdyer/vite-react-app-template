import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '@/store';

import HomePage from './HomePage';

describe('HomePage', () => {
  test('should render the HomePage component without error', () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    expect(screen.getByAltText('Vite logo')).toBeInTheDocument();
    expect(screen.getByAltText('React logo')).toBeInTheDocument();
    expect(screen.getByText('Vite + React')).toBeInTheDocument();
  });
});
