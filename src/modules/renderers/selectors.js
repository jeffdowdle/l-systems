import { createSelector } from 'reselect';

export const selectRenderer = state => state.renderer;

export const getCurrentRenderer = createSelector(
  selectRenderer,
  renderer => renderer.type,
);
