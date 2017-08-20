import * as actionTypes from './actionTypes';

let ruleId = 0;
export const addRule = () => {
  ruleId += 1;

  return {
    type: actionTypes.ADD_RULE,
    id: ruleId,
  };
};

export const removeRule = id => ({
  type: actionTypes.REMOVE_RULE,
  id,
});

export const updateRule = (id, values) => ({
  type: actionTypes.UPDATE_RULE,
  id,
  values,
});
