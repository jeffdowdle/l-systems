import { combineReducers } from 'redux';
import { reducer as axiom } from './modules/axiom';
import { reducer as rules } from './modules/rules';
import { reducer as params } from './modules/params';

export default combineReducers({
  axiom,
  rules,
  params,
});
