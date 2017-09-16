import update from 'immutability-helper';
import * as types from './actionTypes';

const initialState = [
  {
    id: -1,
    symbol: 'X',
    successor: 'F[-X][X]F[-X]+FX',
  },
  {
    id: -2,
    symbol: 'F',
    successor: 'FF',
  },
];

const rule = (state, action) => {
  switch (action.type) {
    case types.ADD_RULE:
      return {
        id: action.id,
        symbol: '',
        successor: '',
      };

    case types.REMOVE_RULE:
      if (state.id === action.id) {
        return null;
      }
      return state;

    case types.UPDATE_RULE:
      if (state.id === action.id) {
        return Object.assign(
          {},
          state,
          action.values,
        );
      }
      return state;

    default:
      return state;
  }
};

const rules = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_RULES:
      return update(state, { $set: action.rules });

    case types.ADD_RULE:
      return state.concat(rule(undefined, action));

    case types.REMOVE_RULE:
      return state
        .map(r => rule(r, action))
        .filter(r => r !== null);

    case types.UPDATE_RULE:
      return state.map(r => rule(r, action));

    default:
      return state;
  }
};

export default rules;
