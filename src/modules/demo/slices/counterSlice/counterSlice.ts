import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/store';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const counterActions = counterSlice.actions;

export const counterReducer = counterSlice.reducer;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice;
