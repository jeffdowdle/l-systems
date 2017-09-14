import { createSelector } from 'reselect';
import { getCurrentRenderer } from 'modules/renderers/selectors';

export const getParams = state => state.params;

export const getCurrentRendererParams = createSelector(
  getCurrentRenderer,
  getParams,
  (renderer, params) => {
    const rendererParams = params[renderer];

    if (!rendererParams) { return null; }

    return rendererParams;
  },
);

export const getFlattenedParamsForRenderer = createSelector(
  getCurrentRenderer,
  getParams,
  (renderer, params) => {
    const flattened = {};

    if (!params[renderer]) { return flattened; }

    params[renderer].forEach((p) => {
      flattened[p.id] = p.value;
    });

    return flattened;
  },
);

