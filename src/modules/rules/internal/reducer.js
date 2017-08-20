import * as types from './actionTypes';

const initialState = [];

const rule = (state, action) => {
  switch (action.type) {
    case types.ADD_RULE:
      return {
        id: action.id,
        symbol: null,
        successor: null,
      };
    case types.REMOVE_RULE:
      if (state.id === action.id) {
        return null;
      }

      return state;
    case types.UPDATE_RULE_SYMBOL:
      if (state.id === action.id) {
        return Object.assign(
          {},
          state,
          { symbol: action.symbol },
        );
      }

      return state;
    case types.UPDATE_RULE_SUCCESSOR:
      if (state.id === action.id) {
        return Object.assign(
          {},
          state,
          { successor: action.successor },
        );
      }

      return state;
    default:
      return state;
  }
};

const rules = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_RULE:
      return state.concat(rule(undefined, action));

    case types.REMOVE_RULE:
      return state
        .map(r => rule(r, action))
        .filter(r => r !== null);

    case types.UPDATE_RULE_SYMBOL:
      return state.map(r => rule(r, action));

    case types.UPDATE_RULE_SUCCESSOR:
      return state.map(r => rule(r, action));

    default:
      return state;
  }
};

export default rules;
