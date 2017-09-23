import { renderers } from 'renderers';
import * as types from './actionTypes';

const initialState = {};
Object.keys(renderers).forEach((key) => {
  initialState[key] = renderers[key].params.map(p => ({
    id: p.id,
    value: p.initialValue,
  }));
})

const renderer = (state, action) => {
  switch (action.type) {
    case types.LOAD_PARAMS:
      return [...action.params];

    case types.UPDATE_PARAM:
      return state.map((param) => {
        if (param.id === action.param) {
          return Object.assign(
            {},
            param,
            { value: action.value },
          );
        }

        return param;
      });

    default:
      return state;
  }
};

const params = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_PARAMS:
      return Object.assign(
        {},
        state,
        {
          [`${action.renderer}`]: renderer(state[action.renderer], action),
        },
      );

    case types.UPDATE_PARAM:
      return Object.assign(
        {},
        state,
        {
          [`${action.renderer}`]: renderer(state[action.renderer], action),
        },
      );

    default:
      return state;
  }
};

export default params;
