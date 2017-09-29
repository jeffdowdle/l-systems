import { DryRunTurtle, CanvasTurtle } from 'renderers/2d/turtle/Turtle';
import TurtleUtils from 'renderers/2d/turtle/TurtleUtils';

import { CommandTypes } from 'renderers/2d/commands';

const BASE_LENGTH = 1;

export default class RafCanvas {
  constructor(canvas, params, commands, onFinish = () => {}) {
    this.canvas = canvas;
    this.params = params;
    this.commands = commands;

    this.canvas.width = 600;
    this.canvas.height = 600;

    this.isDrawing = false;
    this.onCancelDone = null;
    this.onFinish = null;
    this.shouldCancel = false
  }

  calculateBoundingBox(instructions) {
    const dryRunTurtle = new DryRunTurtle({
      angle: this.params.angle,
      length: BASE_LENGTH,
      startX: 0,
      startY: 0,
    });

    this.executeSync(dryRunTurtle, instructions);

    return dryRunTurtle.boundingBox;
  }

  draw(instructions, onFinish = () => {}) {
    this.onFinish = onFinish;
    this.isDrawing = true;

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

    this.executeRequestAnimFrame(drawingTurtle, instructions);
  }

  executeSync(turtle, instructions) {
    instructions.split('').forEach((symbol) => {
      this.executeCommand(turtle, symbol);
    });
  }

  executeRequestAnimFrame(turtle, instructions) {
    const batchSize = 200;

    let i = 0;
    const step = () => {
      for (let j = i; j < i + batchSize; j += 1) {
        this.executeCommand(turtle, instructions[j]);
      }

      i += batchSize;

      if (!this.shouldCancel && i <= instructions.length) {
        window.requestAnimationFrame(step);
      } else {
        this.isDrawing = false;

        if (typeof this.onCancelDone === 'function') {
          this.onCancelDone();
        }

        if (typeof this.onFinish === 'function') {
          this.onFinish();
        }
      }
    };

    window.requestAnimationFrame(step);
  }

  cancel(onCancelDone) {
    this.onCancelDone = onCancelDone;
    this.shouldCancel = true;
  }

  executeCommand(turtle, symbol) {
    switch (this.commands[symbol]) {
      case CommandTypes.DRAW_FORWARD:
        turtle.drawForward();
        break;
      case CommandTypes.MOVE_FORWARD:
        turtle.moveForward();
        break;
      case CommandTypes.TURN_LEFT:
        turtle.turnLeft();
        break;
      case CommandTypes.TURN_RIGHT:
        turtle.turnRight();
        break;
      case CommandTypes.PUSH:
        turtle.push();
        break;
      case CommandTypes.POP:
        turtle.pop();
        break;
      default:
        break;
    }
  }
}
