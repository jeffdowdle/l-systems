import * as types from './actionTypes';

let ruleId = 0;
export const loadRules = rules => ({
  type: types.LOAD_RULES,
  rules: rules.map((rule) => {
    ruleId += 1;

    return Object.assign({}, rule, { id: ruleId });
  }),
});

export const addRule = () => {
  ruleId += 1;

  return {
    type: types.ADD_RULE,
    id: ruleId,
  };
};

export const removeRule = id => ({
  type: types.REMOVE_RULE,
  id,
});

export const updateRule = (id, values) => ({
  type: types.UPDATE_RULE,
  id,
  values,
});

