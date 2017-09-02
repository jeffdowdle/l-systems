import deepFreeze from 'deep-freeze';
import reducer from '../reducer';
import * as types from '../actionTypes';

jest.unmock('../actions');

describe('renderers/UPDATE_RENDERER', () => {
  it('Updates the current renderer', () => {
    const before = '';

    const action = {
      type: types.UPDATE_RENDERER,
      renderer: 'testRenderer',
    };

    const after = 'testRenderer';

    deepFreeze(before);
    expect(reducer(before, action)).toEqual(after);
  });
});
