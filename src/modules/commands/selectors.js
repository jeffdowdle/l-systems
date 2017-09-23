import { createSelector } from 'reselect';
import { getCurrentRenderer } from 'modules/renderer/selectors';

export const getCommands = state => state.commands;

export const getCurrentRendererCommands = createSelector(
  getCurrentRenderer,
  getCommands,
  (renderer, commands) => {
    const rendererCommands = commands[renderer];

    if (!rendererCommands) { return null; }

    return rendererCommands;
  },
);

export const getFlattenedCommandsForRenderer = createSelector(
  getCurrentRenderer,
  getCommands,
  (renderer, commands) => {
    const flattened = {};

    if (!commands[renderer]) { return flattened; }

    commands[renderer].forEach((p) => {
      flattened[p.symbol] = p.value;
    });

    return flattened;
  },
);
