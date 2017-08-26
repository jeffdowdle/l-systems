import * as types from './actionTypes';

const initialState = {
  iterations: 1,
  angle: 90,
};

const params = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_ITERATIONS:
      return Object.assign({},
        state,
        { iterations: action.iterations },
      );

    case types.UPDATE_ANGLE:
      return Object.assign({},
        state,
        { angle: action.angle },
      );

    default:
      return state;
  }
};

export default params;
