import { action1Handler, action2Handler } from '../reducer';

describe('ip reducer', () => {
  const initState = {
    name: '',
    age: 0
  };
  test('test action1handler', () => {

    const newState = action1Handler(initState, {});
    expect(newState).toEqual({ name: 'novaline', age: 0 });
  });

  test('test action2Handler', () => {
    const newState = action2Handler(initState, {});
    expect(newState).toEqual({ name: '', age: 23 });
  });
})
