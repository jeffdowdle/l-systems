import deepFreeze from 'deep-freeze';
import reducer from 'modules/renderers/reducer';
import * as types from 'modules/renderers/actionTypes';

jest.unmock('modules/renderers/actions');

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
