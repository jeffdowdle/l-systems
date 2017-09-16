import * as types from './actionTypes';

export const loadPreset = preset => ({
  type: types.LOAD_PRESET,
  preset,
});
