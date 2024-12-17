import { renderHook } from '@testing-library/react';

import { Provider } from 'react-redux';

import store from '@/store';
import useAppDispatch from './useAppDispatch';

describe('useAppDispatch', () => {
  test('should return the dispatch function', () => {
    const { result } = renderHook(() => useAppDispatch(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    expect(result.current).toBe(store.dispatch);
  });
});
