import {
  params as canvasTurtleParams,
} from 'modules/renderers/canvasTurtle';
import rendererTypes from './rendererTypes';

export default {
  [`${rendererTypes.CANVAS_TURTLE}`]: canvasTurtleParams,
};
