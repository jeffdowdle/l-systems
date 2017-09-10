import { combineReducers } from 'redux';
import { reducer as renderer } from './modules/renderers';
import { reducer as params } from './modules/params';
import { reducer as commands } from './modules/commands';
import { reducer as iterations } from './modules/iterations';
import { reducer as axiom } from './modules/axiom';
import { reducer as rules } from './modules/rules';

export default combineReducers({
  renderer,
  params,
  commands,
  iterations,
  axiom,
  rules,
});
