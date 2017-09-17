import * as types from './actionTypes';

const initialState = 5;

const iterations = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_ITERATIONS:
      return action.iterations;

    default:
      return state;
  }
};

export default iterations;
