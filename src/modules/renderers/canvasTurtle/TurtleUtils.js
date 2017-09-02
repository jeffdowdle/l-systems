export default class TurtleUtils {
  static calculateScalingFactor(sourceWidth, sourceHeight, targetWidth, targetHeight) {
    if (sourceWidth >= sourceHeight) {
      return targetWidth / sourceWidth;
    }

    return targetHeight / sourceHeight;
  }
}

