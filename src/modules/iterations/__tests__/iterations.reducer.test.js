import deepFreeze from 'deep-freeze';
import reducer from '../internal/reducer';
import * as types from '../internal/actionTypes';

jest.unmock('../internal/actions');

describe('iterations/UPDATE_ITERATIONS', () => {
  it('Updates the iterations', () => {
    const before = '';

    const action = {
      type: types.UPDATE_ITERATIONS,
      iterations: 'new',
    };

    const after = 'new';

    deepFreeze(before);
    expect(reducer(before, action)).toEqual(after);
  });
});
