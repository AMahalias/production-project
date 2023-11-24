import { counterReducer, CounterSchema } from 'entities/Counter';
import { counterActions } from './counterSlice';

describe('counterSlice.test', () => {
  test('increment', () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 });
  });

  test('decrement', () => {
    const state: CounterSchema = { value: 9 };
    expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 8 });
  });

  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
  })
})
