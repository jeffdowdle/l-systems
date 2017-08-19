import * as types from './actionTypes';

const initialState = [];

const rule = (state, action) => {
  switch (action.type) {
    case types.ADD_RULE:
      return {
        id: action.id,
        symbol: null,
        rule: null,
      };
    default:
      return state;
  }
};

const rules = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_RULE:
      return state.concat(rule(undefined, action));
    default:
      return state;
  }
};

export default rules;
