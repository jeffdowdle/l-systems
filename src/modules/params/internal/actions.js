import * as types from './actionTypes';

export const registerParam = declaration => ({
  type: types.REGISTER_PARAM,
  declaration,
});

export const updateParam = (id, value) => ({
  type: types.UPDATE_PARAM,
  id,
  value,
});
