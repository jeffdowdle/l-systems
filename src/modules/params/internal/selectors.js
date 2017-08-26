import { createSelector } from 'reselect';

export const getParams = state => state.params;

export const getIterations = createSelector(
  getParams,
  params => params.iterations,
);

export const getAngle = createSelector(
  getParams,
  params => params.angle,
);
