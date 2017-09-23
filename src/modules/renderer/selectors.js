import { createSelector } from 'reselect';
import { renderers } from 'renderers';

export const selectRenderer = state => state.renderer;

export const getRenderer = createSelector(
  selectRenderer,
  renderer => renderers[renderer.type],
);

export const getCurrentRenderer = createSelector(
  selectRenderer,
  renderer => renderer.type,
);

export const getCurrentStrategy = createSelector(
  selectRenderer,
  renderer => renderer.strategy,
);
