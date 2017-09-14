import deepFreeze from 'deep-freeze';
import reducer from 'modules/axiom/reducer';
import * as types from 'modules/axiom/actionTypes';

jest.unmock('modules/axiom/actions');

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
