import * as types from './actionTypes';

export const updateParam = (renderer, param, value) => ({
  type: types.UPDATE_PARAM,
  renderer,
  param,
  value,
});
