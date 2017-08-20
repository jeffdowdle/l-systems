const prefixed = type => `rules/${type}`;

export const ADD_RULE = prefixed('ADD_RULE');
export const REMOVE_RULE = prefixed('REMOVE_RULE');

export const UPDATE_RULE_SYMBOL = prefixed('UPDATE_RULE_SYMBOL');
export const UPDATE_RULE_SUCCESSOR = prefixed('UPDATE_RULE_SUCCESSOR');
