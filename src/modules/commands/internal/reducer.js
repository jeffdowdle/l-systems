import * as types from './actionTypes';
import { commandDefinitions } from '../../../modules/renderers';

const initialState = {};
Object.keys(commandDefinitions).forEach((key) => {
  initialState[key] = [];

  commandDefinitions[key].forEach((d) => {
    if (d.defaultSymbols) {
      d.defaultSymbols.forEach((symbol) => {
        initialState[key].push({
          symbol,
          value: d.id,
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
