import { combineReducers } from 'redux';
import { reducer as axiom } from './modules/axiom';
import { reducer as rules } from './modules/rules';

export default combineReducers({
  axiom,
  rules,
});
