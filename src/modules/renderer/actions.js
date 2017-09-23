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
