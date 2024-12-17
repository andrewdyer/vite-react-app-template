import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { counterReducer } from '@demo/state';

import Counter from './Counter';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  preloadedState: {
    counter: { value: 0 },
  },
});

describe('Counter', () => {
  test('should increment the counter when the button is clicked', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

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
