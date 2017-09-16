const prefixed = type => `renderers/${type}`;

export const UPDATE_RENDERER = prefixed('UPDATE_RENDERER');
export const INVALIDATE_RENDERING = prefixed('INVALIDATE_RENDERING');
export const VALIDATE_RENDERING = prefixed('VALIDATE_RENDERING');
