import counterReducer, { increment } from './counterSlice';

describe('counterSlice', () => {
  test('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
    });
  });

  test('should handle increment', () => {
    const initialState = { value: 0 };
    const actual = counterReducer(initialState, increment());
    expect(actual.value).toEqual(1);
  });
});
