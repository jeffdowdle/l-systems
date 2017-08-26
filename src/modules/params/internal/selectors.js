import { createSelector } from 'reselect';

export const getParams = state => state.params;

export const createParamSelector = id => (
  createSelector(
    getParams,
    params => params[id],
  )
);

export const getFlattenedParams = createSelector(
  getParams,
  (params) => {
    const flattened = {};

    params.forEach((p) => {
      flattened[p.id] = p.value;
    });

    return flattened;
  },
);
