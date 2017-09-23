const prefixed = type => `renderers/${type}`;

export const UPDATE_RENDERER = prefixed('UPDATE_RENDERER');
export const UPDATE_RENDER_STRATEGY = prefixed('UPDATE_RENDER_STRATEGY');
export const INVALIDATE_RENDERING = prefixed('INVALIDATE_RENDERING');
export const VALIDATE_RENDERING = prefixed('VALIDATE_RENDERING');
