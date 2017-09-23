import deepFreeze from 'deep-freeze';
import reducer from 'modules/renderer/reducer';
import * as types from 'modules/renderer/actionTypes';

jest.unmock('modules/renderer/actions');

describe('renderers/UPDATE_RENDERER', () => {
  it('Updates the current renderer', () => {
    const before = {
      type: '',
    };

    const action = {
      type: types.UPDATE_RENDERER,
      renderer: 'testRenderer',
    };

    const after = {
      type: 'testRenderer',
    };

    deepFreeze(before);
    expect(reducer(before, action)).toEqual(after);
  });
});

describe('renderers/INVALIDATE_RENDERING', () => {
  it('sets renderingIsValid to false', () => {
    const before = {
      renderingIsValid: true,
    };

    const action = {
      type: types.INVALIDATE_RENDERING,
    };

    const after = {
      renderingIsValid: false,
    };

    deepFreeze(before);
    expect(reducer(before, action)).toEqual(after);
  });
});


describe('renderers/VALIDATE_RENDERING', () => {
  it('sets renderingIsValid to true', () => {
    const before = {
      renderingIsValid: false,
    };

    const action = {
      type: types.VALIDATE_RENDERING,
    };

    const after = {
      renderingIsValid: true,
    };

    deepFreeze(before);
    expect(reducer(before, action)).toEqual(after);
  });
});
