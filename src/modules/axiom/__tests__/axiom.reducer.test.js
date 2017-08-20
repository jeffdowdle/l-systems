import deepFreeze from 'deep-freeze';
import reducer from '../internal/reducer';
import * as types from '../internal/actionTypes';

jest.unmock('../internal/actions');

describe('axiom/UPDATE_AXIOM', () => {
  it('Updates the axiom', () => {
    const before = '';

    const action = {
      type: types.UPDATE_AXIOM,
      axiom: 'new',
    };

    const after = 'new';

    deepFreeze(before);
    expect(reducer(before, action)).toEqual(after);
  });
});
