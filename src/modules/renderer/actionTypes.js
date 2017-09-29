const prefixed = type => `renderer/${type}`;

export const UPDATE_RENDERER = prefixed('UPDATE_RENDERER');
export const UPDATE_RENDER_STRATEGY = prefixed('UPDATE_RENDER_STRATEGY');
export const INVALIDATE_RENDERING = prefixed('INVALIDATE_RENDERING');
export const VALIDATE_RENDERING = prefixed('VALIDATE_RENDERING');
export const START_DRAW = prefixed('START_DRAW');
export const FINISH_DRAW = prefixed('FINISH_DRAW');
export const REQUEST_CANCEL_DRAW = prefixed('REQUEST_CANCEL_DRAW');
export const CANCEL_DRAW = prefixed('CANCEL_DRAW');
