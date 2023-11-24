import { fireEvent, screen } from '@testing-library/react'
import { Counter } from './Counter';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { userEvent } from '@storybook/testing-library';

describe('Counter', () => {
  test('component exists', () => {
    componentRender(<Counter />, {initialState: {counter: {value: 2}}});
    expect(screen.getByTestId('value-title')).toHaveTextContent('2');
  });

  test('increment', () => {
    componentRender(<Counter />, {initialState: {counter: {value: 2}}});
    fireEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('3');
  });

  test('decrement', () => {
    componentRender(<Counter />, {initialState: {counter: {value: 2}}});
    fireEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('1');
  });
});
