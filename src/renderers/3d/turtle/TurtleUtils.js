import { CommandTypes } from 'renderers/3d/commands';

export default class TurtleUtils {
  static calculateScalingFactor(sourceWidth, sourceHeight, sourceDepth, targetWidth, targetHeight, targetDepth) {
    // TODO handle 3d
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
      case CommandTypes.PITCH_DOWN:
        turtle.pitchDown();
        break;
      case CommandTypes.PITCH_UP:
        turtle.pitchUp();
        break;
      case CommandTypes.ROLL_LEFT:
        turtle.rollLeft();
        break;
      case CommandTypes.ROLL_RIGHT:
        turtle.rollRight();
        break;
      case CommandTypes.TURN_AROUND:
        turtle.rollRight();
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
