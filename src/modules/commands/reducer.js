import { renderers } from 'renderers';
import * as types from './actionTypes';

const initialState = {};

Object.keys(renderers).forEach((key) => {
  initialState[key] = [];

  renderers[key].commands.forEach((r) => {
    if (r.defaultSymbols) {
      r.defaultSymbols.forEach((symbol) => {
        initialState[key].push({
          symbol,
          value: r.id,
        });
      });
    }
  });
});


const commands = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default commands;
