import update from 'immutability-helper';

import * as types from './actionTypes';

const initialState = {
  type: 'RENDERER_2D',
  strategy: 'RAF_CANVAS',
  renderingIsValid: false,
};

const renderer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_RENDERER:
      return update(state, {
        type: { $set: action.renderer },
      });

    case types.UPDATE_RENDER_STRATEGY:
      return update(state, {
        strategy: { $set: action.strategy },
      });

    case types.INVALIDATE_RENDERING:
      return update(state, {
        renderingIsValid: { $set: false },
      });

    case types.VALIDATE_RENDERING:
      return update(state, {
        renderingIsValid: { $set: true },
      });

    default:
      return state;
  }
};

export default renderer;
