import { paramDefinitions } from 'modules/renderers';
import * as types from './actionTypes';

const initialState = {};
Object.keys(paramDefinitions).forEach((key) => {
  initialState[key] = paramDefinitions[key].map(d => ({
    id: d.id,
    value: d.initialValue,
  }));
});

const renderer = (state, action) => {
  switch (action.type) {
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
