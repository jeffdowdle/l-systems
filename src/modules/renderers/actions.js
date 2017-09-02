import * as types from './actionTypes';

export const updateRenderer = renderer => ({
  type: types.UPDATE_RENDERER,
  renderer,
});
