import deepFreeze from 'deep-freeze';
import reducer from 'modules/iterations/reducer';
import * as types from 'modules/iterations/actionTypes';

jest.unmock('modules/iterations/actions');

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
