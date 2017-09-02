import { DryRunTurtle, CanvasTurtle } from './Turtle';
import TurtleUtils from './TurtleUtils';

export const paramDeclarations = [
  {
    id: 'iterations',
    label: 'Iterations',
    fieldType: 'RANGE',
    initialValue: 3,
    min: 1,
    max: 8,
  },
  {
    id: 'angle',
    label: 'Angle',
    fieldType: 'NUMBER',
    initialValue: 90,
  },
  {
    id: 'testing',
    label: 'Testing one two three',
    fieldType: 'TEXT',
    initialValue: 'FF+F-F[O]+F',
  },
];

const TurtleCommand = {
  DRAW_FORWARD: 'F',
  TURN_LEFT: '+',
  TURN_RIGHT: '-',
  PUSH: '[',
  POP: ']',
};

const BASE_LENGTH = 1;

export default class TurtleRenderer {
  constructor(canvas, params) {
    this.canvas = canvas;
    this.params = params;

    this.canvas.width = 600;
    this.canvas.height = 600;
  }

  calculateBoundingBox(instructions) {
    const dryRunTurtle = new DryRunTurtle({
      angle: this.params.angle,
      length: BASE_LENGTH,
      startX: 0,
      startY: 0,
    });

    this.execute(dryRunTurtle, instructions);

    return dryRunTurtle.boundingBox;
  }

  draw(instructions) {
    const ctx = this.canvas.getContext('2d');

    // Clear canvas
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Do a dry run without drawing to the canvas to get the bounding box of what the
    // turtle has drawn. We can then the turtle a second time with scaled down parameters
    // so that it will fit nicely on the screen.
    const boundingBox = this.calculateBoundingBox(instructions);

    const bBoxWidth = boundingBox.right - boundingBox.left;
    const bBoxHeight = boundingBox.bottom - boundingBox.top;

    // Find the ratio between the canvas size and the intial bounding box.
    const scalingFactor = TurtleUtils.calculateScalingFactor(
      bBoxWidth,
      bBoxHeight,
      this.canvas.width,
      this.canvas.height,
    );

    // Calculate the space left around the scaled drawing, we'll use it to centre the drawing.
    const extraWidth = this.canvas.width - (bBoxWidth * scalingFactor);
    const extraHeight = this.canvas.height - (bBoxHeight * scalingFactor);

    // Adjust the starting position so that the final drawing is centered in the canvas.
    const adjustedStartX = -(boundingBox.left * scalingFactor) + (extraWidth / 2);
    const adjustedStartY = -(boundingBox.top * scalingFactor) + (extraHeight / 2);

    // Finally, draw the scaled down image
    const drawingTurtle = new CanvasTurtle(this.canvas, {
      angle: this.params.angle,
      length: BASE_LENGTH * scalingFactor,
      startX: adjustedStartX,
      startY: adjustedStartY,
    });

    this.execute(drawingTurtle, instructions);
  }

  execute(turtle, instructions) {
    instructions.split('').forEach((command) => {
      this.executeCommand(turtle, command);
    });
  }

  executeCommand(turtle, command) {
    switch (command) {
      case TurtleCommand.DRAW_FORWARD:
        turtle.drawForward();
        break;
      case TurtleCommand.TURN_LEFT:
        turtle.turnLeft();
        break;
      case TurtleCommand.TURN_RIGHT:
        turtle.turnRight();
        break;
      case TurtleCommand.PUSH:
        turtle.push();
        break;
      case TurtleCommand.POP:
        turtle.pop();
        break;
      default:
        break;
    }
  }
}
