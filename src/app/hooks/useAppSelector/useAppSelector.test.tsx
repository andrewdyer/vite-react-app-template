import { configureStore } from '@reduxjs/toolkit';
import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';

import useAppSelector from './useAppSelector';

const createTestStore = () =>
  configureStore({
    reducer: {},
  });

describe('useAppSelector', () => {
  it('should not throw errors when used in a component', () => {
    const { result } = renderHook(() => useAppSelector((state) => state), {
      wrapper: ({ children }) => (
        <Provider store={createTestStore()}>{children}</Provider>
      ),
    });

    expect(result);
  });
});
