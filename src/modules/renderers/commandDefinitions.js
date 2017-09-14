import {
  commands as canvasTurtleCommands,
} from 'modules/renderers/canvasTurtle';
import rendererTypes from './rendererTypes';

export default {
  [`${rendererTypes.CANVAS_TURTLE}`]: canvasTurtleCommands,
};
