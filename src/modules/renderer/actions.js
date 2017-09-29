import * as types from './actionTypes';

export const updateRenderer = renderer => ({
  type: types.UPDATE_RENDERER,
  renderer,
});

export const updateRenderStrategy = strategy => ({
  type: types.UPDATE_RENDER_STRATEGY,
  strategy,
});

export const invalidateRendering = () => ({
  type: types.INVALIDATE_RENDERING,
});

export const validateRendering = () => ({
  type: types.VALIDATE_RENDERING,
});

export const startDraw = () => ({
  type: types.START_DRAW,
});

export const finishDraw = () => ({
  type: types.FINISH_DRAW,
});

export const requestCancelDraw = () => ({
  type: types.REQUEST_CANCEL_DRAW,
});

export const cancelDraw = () => ({
  type: types.CANCEL_DRAW,
});
