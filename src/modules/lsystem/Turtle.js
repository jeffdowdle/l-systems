const toRadians = degrees => degrees * (Math.PI / 180);

const defaultParams = {
  length: 10,
  angle: 90,

  startX: 0,
  startY: 0,
  startAngle: 0,
};

export default class BaseTurtle {
  constructor(params) {
    this.params = Object.assign({}, defaultParams, params);

    this.posX = this.params.startX;
    this.posY = this.params.startY;

    this.heading = this.params.startAngle;

    this.boundingBox = {
      left: this.posX,
      right: this.posX,
      top: this.posY,
      bottom: this.posY,
    };
  }

  drawLine(x1, y1, x2, y2) {
    this.boundingBox.left = Math.min(x1, this.boundingBox.left);
    this.boundingBox.right = Math.max(x2, this.boundingBox.right);
    this.boundingBox.top = Math.min(y1, this.boundingBox.top);
    this.boundingBox.bottom = Math.max(y2, this.boundingBox.bottom);
  }

  forward(penDown) {
    const xOffset = this.params.length * Math.cos(toRadians(this.heading));
    const yOffset = this.params.length * Math.sin(toRadians(this.heading));

    if (penDown) {
      this.drawLine(
        this.posX,
        this.posY,
        this.posX + xOffset,
        this.posY + yOffset,
      );
    }

    this.posX += xOffset;
    this.posY += yOffset;
  }

  drawForward() {
    return this.forward(true);
  }

  moveForward() {
    return this.forward(false);
  }

  turnLeft() {
    this.heading += this.params.angle;
  }

  turnRight() {
    this.heading -= this.params.angle;
  }
}

export class DryRunTurtle extends BaseTurtle {

}

export class CanvasTurtle extends BaseTurtle {
  constructor(canvas, params) {
    super(params);

    this.canvas = canvas;
  }

  drawLine(x1, y1, x2, y2) {
    super.drawLine(x1, y1, x2, y2);

    const ctx = this.canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
}
