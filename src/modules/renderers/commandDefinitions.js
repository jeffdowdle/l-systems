import {
  commands as canvasTurtleCommands,
} from './canvasTurtle';
import rendererTypes from './rendererTypes';

export default {
  [`${rendererTypes.CANVAS_TURTLE}`]: canvasTurtleCommands,
};
