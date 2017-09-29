import { DryRunTurtle } from 'renderers/2d/turtle/Turtle';
import TurtleUtils from 'renderers/2d/turtle/TurtleUtils';

let baseLength = 1;
let startX = 0;
let startY = 0;
let angle = 0;

let instructions = '';
let commands = {};

const calculateBoundingBox = (done) => {
  const dryRunTurtle = new DryRunTurtle({
    length: baseLength,
    angle,
    startX,
    startY,
  });

  instructions.split('').forEach((symbol) => {
    TurtleUtils.executeCommand(dryRunTurtle, commands[symbol]);
  });

  return dryRunTurtle.boundingBox;
}

onmessage = (e) => {
  const type = e.data.type;
  const value = e.data.value;

  switch (type) {
    case 'RUN':
      baseLength = value.baseLength || baseLength;
      startX = value.startX || startX;
      startY = value.startY || startY;
      angle = value.angle || angle;

      instructions = value.instructions || instructions;
      commands = value.commands || commands;

      postMessage(calculateBoundingBox());

      break;
    case 'CLOSE':
      close();
    default:
      break;
  }
}
