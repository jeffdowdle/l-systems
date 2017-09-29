import update from 'immutability-helper';

import * as types from './actionTypes';

const initialState = {
  type: 'RENDERER_2D',
  strategy: 'RAF_CANVAS',
  renderingIsValid: false,
  isDrawing: false,
  shouldCancel: false,
  isCancelling: false,
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

    case types.START_DRAW:
      return update(state, {
        isDrawing: { $set: true },
      });

    case types.FINISH_DRAW:
      return update(state, {
        isDrawing: { $set: false },
        shouldCancel: { $set: false },
        isCancelling: { $set: false },
      });

    case types.CANCEL_DRAW:
      return update(state, {
        shouldCancel: { $set: false },
        isCancelling: { $set: true },
      });

    case types.REQUEST_CANCEL_DRAW:
      if (!state.isDrawing) { return state; }

      return update(state, {
        shouldCancel: { $set: true },
      });

    default:
      return state;
  }
};

export default renderer;
