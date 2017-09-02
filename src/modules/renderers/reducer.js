import * as types from './actionTypes';
import rendererTypes from './rendererTypes';

const initialState = rendererTypes.CANVAS_TURTLE;

const renderer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_RENDERER:
      return action.renderer;

    default:
      return state;
  }
};

export default renderer;
