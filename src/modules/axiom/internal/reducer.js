import * as types from './actionTypes';

const initialState = '';

const axiom = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_AXIOM:
      return action.axiom;

    default:
      return state;
  }
};

export default axiom;
