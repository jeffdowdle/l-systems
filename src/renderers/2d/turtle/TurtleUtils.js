import { CommandTypes } from 'renderers/2d/commands';

export default class TurtleUtils {
  static calculateScalingFactor(sourceWidth, sourceHeight, targetWidth, targetHeight) {
    if (sourceWidth >= sourceHeight) {
      return targetWidth / sourceWidth;
    }

    return targetHeight / sourceHeight;
  }

  static executeCommand(turtle, command) {
    switch (command) {
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
