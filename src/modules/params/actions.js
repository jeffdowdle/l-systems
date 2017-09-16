import * as types from './actionTypes';

export const loadParams = (renderer, params) => ({
  type: types.LOAD_PARAMS,
  renderer,
  params,
});

export const updateParam = (renderer, param, value) => ({
  type: types.UPDATE_PARAM,
  renderer,
  param,
  value,
});
