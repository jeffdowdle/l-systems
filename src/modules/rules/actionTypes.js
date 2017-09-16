const prefixed = type => `rules/${type}`;

export const LOAD_RULES = prefixed('LOAD_RULES');
export const ADD_RULE = prefixed('ADD_RULE');
export const REMOVE_RULE = prefixed('REMOVE_RULE');
export const UPDATE_RULE = prefixed('UPDATE_RULE');
