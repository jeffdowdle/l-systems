import update from 'immutability-helper';

import * as types from './actionTypes';
import rendererTypes from './rendererTypes';

const initialState = {
  type: rendererTypes.CANVAS_TURTLE,
  renderingIsValid: false,
};

const renderer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_RENDERER:
      return update(state, {
        type: { $set: action.renderer },
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
