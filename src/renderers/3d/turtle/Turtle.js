import * as THREE from 'three';

const toRadians = degrees => degrees * (Math.PI / 180);

const defaultParams = {
  length: 10,
  angle: 90,

  startX: 0,
  startY: 0,
  startZ: 0,
  startAngle: -90,
};

export default class BaseTurtle {
  constructor(params) {
    this.params = Object.assign({}, defaultParams, params);

    this.position = new THREE.Vector3(
      this.params.startX,
      this.params.startY,
      this.params.startZ,
    );

    this.orientation = new THREE.Matrix4();
    this.orientation.makeRotationZ(toRadians(90));

    this.stack = [];

    this.boundingBox = {
      xMin: this.position.x,
      xMax: this.position.x,
      yMin: this.position.y,
      yMax: this.position.y,
      zMin: this.position.z,
      zMax: this.position.z,
    };
  }

  drawLine(prevPos, nextPos) {
    this.boundingBox.xMin = Math.min(nextPos.x, this.boundingBox.xMin);
    this.boundingBox.xMax = Math.max(nextPos.x, this.boundingBox.xMax);

    this.boundingBox.yMin = Math.min(nextPos.y, this.boundingBox.yMin);
    this.boundingBox.yMax = Math.max(nextPos.y, this.boundingBox.yMax);

    this.boundingBox.zMin = Math.min(nextPos.z, this.boundingBox.zMin);
    this.boundingBox.zMax = Math.max(nextPos.z, this.boundingBox.zMax);
  }

  forward(penDown) {
    const previousPosition = this.position.clone();

    const delta = new THREE.Vector3();
    delta.setFromMatrixColumn(this.orientation, 0);
    delta.multiplyScalar(this.params.length);
    this.position.add(delta);

    if (penDown) {
      this.drawLine(
        previousPosition,
        this.position.clone(),
      );
    }
  }

  drawForward() {
    return this.forward(true);
  }

  moveForward() {
    return this.forward(false);
  }

  turnLeft() {
    const rotMatrix = new THREE.Matrix4();
    rotMatrix.makeRotationY(toRadians(this.params.angle));

    this.orientation.multiply(rotMatrix);
  }

  turnRight() {
    const rotMatrix = new THREE.Matrix4();
    rotMatrix.makeRotationY(toRadians(-this.params.angle));

    this.orientation.multiply(rotMatrix);
  }

  turnAround() {
    const rotMatrix = new THREE.Matrix4();
    rotMatrix.makeRotationY(toRadians(180));

    this.orientation.multiply(rotMatrix);
  }

  pitchDown() {
    const rotMatrix = new THREE.Matrix4();
    rotMatrix.makeRotationZ(toRadians(this.params.angle));

    this.orientation.multiply(rotMatrix);
  }

  pitchUp() {
    const rotMatrix = new THREE.Matrix4();
    rotMatrix.makeRotationZ(toRadians(-this.params.angle));

    this.orientation.multiply(rotMatrix);
  }

  rollLeft() {
    const rotMatrix = new THREE.Matrix4();
    rotMatrix.makeRotationX(toRadians(this.params.angle));

    this.orientation.multiply(rotMatrix);
  }

  rollRight() {
    const rotMatrix = new THREE.Matrix4();
    rotMatrix.makeRotationX(toRadians(-this.params.angle));

    this.orientation.multiply(rotMatrix);
  }

  push() {
    this.stack.push({
      position: this.position.clone(),
      orientation: this.orientation.clone(),
    });
  }

  pop() {
    const popped = this.stack.pop();

    if (popped) {
      this.position = popped.position;
      this.orientation = popped.orientation;
    }
  }
}

export class DryRunTurtle extends BaseTurtle {

}

export class WebGLTurtle extends BaseTurtle {
  constructor(scene, params) {
    super(params);

    this.scene = scene;
  }

  drawLine(prevPos, nextPos) {
    super.drawLine(prevPos, nextPos);

    const geometry = new THREE.Geometry();
    geometry.vertices.push(prevPos);
    geometry.vertices.push(nextPos);

    const material = new THREE.LineBasicMaterial({ color: 0xffffff });

    const line = new THREE.Line(geometry, material);

    this.scene.add(line);
  }
}
