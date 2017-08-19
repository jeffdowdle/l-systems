import * as actionTypes from './actionTypes';

let ruleId = 0;
export const addRule = () => {
  ruleId += 1;

  return {
    type: actionTypes.ADD_RULE,
    id: ruleId,
  };
};
