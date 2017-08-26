import * as types from './actionTypes';

export const updateIterations = iterations => ({
  type: types.UPDATE_ITERATIONS,
  iterations,
});

export const updateAngle = angle => ({
  type: types.UPDATE_ANGLE,
  angle,
});
