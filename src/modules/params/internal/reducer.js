import * as types from './actionTypes';

const initialState = [];

const param = (state, action) => {
  switch (action.type) {
    case types.REGISTER_PARAM:
      return {
        id: action.declaration.id,
        value: action.declaration.initialValue,
      };

    case types.UPDATE_PARAM:
      if (state.id === action.id) {
        return Object.assign(
          {},
          state,
          { value: action.value },
        );
      }
      return state;

    default:
      return state;
  }
};

const params = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_PARAM:
      return state.concat(param(undefined, action));

    case types.UPDATE_PARAM:
      return state.map(p => param(p, action));

    default:
      return state;
  }
};

export default params;
