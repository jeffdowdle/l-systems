import * as THREE from 'three';

import { DryRunTurtle, WebGLTurtle } from 'renderers/3d/turtle/Turtle';
import TurtleUtils from 'renderers/3d/turtle/TurtleUtils';

import DimensionsWorker from './dimensions.worker';

const BASE_LENGTH = 15;

const CAMERA_FOV = 400;
const CAMERA_NEAR_PLANE = 0.1;
const CAMERA_FAR_PLANE = 10000;

const RENDERER_WIDTH = 700;
const RENDERER_HEIGHT = 700;

export default class WebGL {
  constructor(container, params, commands, onFinish = () => {}) {
    this.container = container;
    this.params = params;
    this.commands = commands;

    this.isDrawing = false;
    this.onCancelDone = null;
    this.onFinish = null;
    this.shouldCancel = false

    this.scene = null;
    this.camera = null;
    this.renderer = null;

    this.renderQueue = [];
  }

  draw(instructions, onFinish = () => {}) {
    this.onFinish = onFinish;
    this.isDrawing = true;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      CAMERA_FOV,
      RENDERER_WIDTH / RENDERER_HEIGHT,
      CAMERA_NEAR_PLANE,
      CAMERA_FAR_PLANE,
    );

    this.cameraX = 0;
    this.camera.position.set(this.cameraX, 200, 500);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(RENDERER_WIDTH, RENDERER_HEIGHT);
    this.container.appendChild(this.renderer.domElement);
    var axisHelper = new THREE.AxisHelper(50);
    this.scene.add(axisHelper);

    this.renderer.render(this.scene, this.camera);


    // Do a dry run without drawing to the canvas to get the bounding box of what the
    // turtle has drawn. We can then the turtle a second time with scaled down parameters
    // so that it will fit nicely on the screen.
    // This can take awhile, so run it in a worker.
    const worker = new DimensionsWorker();
    worker.postMessage({
      type: 'RUN',
      value: {
        angle: this.params.angle,
        baseLength: BASE_LENGTH,
        startX: 0,
        startY: 0,
        startZ: 0,
        commands: this.commands,
        instructions,
      }
    });

    worker.addEventListener('message', (e) => {
      // Teardown the worker
      worker.postMessage({ type: 'CLOSE' });

      const boundingBox = e.data;

      const bBoxWidth = boundingBox.xMax - boundingBox.xMin;
      const bBoxHeight = boundingBox.yMax - boundingBox.yMin;
      const bBoxDepth = boundingBox.zMax - boundingBox.zMin;

      // Find the ratio between the canvas size and the intial bounding box.
      const scalingFactor = TurtleUtils.calculateScalingFactor(
        bBoxWidth,
        bBoxHeight,
        bBoxDepth,
        400,
        400,
        400,
      );

      const scaledRelativeStartPosition = new THREE.Vector3(
        -1 * boundingBox.xMin * scalingFactor,
        -1 * boundingBox.yMin * scalingFactor,
        -1 * boundingBox.zMin * scalingFactor,
      );

      const adjustedStart = new THREE.Vector3(
        -200 + scaledRelativeStartPosition.x,
        -200 + scaledRelativeStartPosition.y,
        -200 + scaledRelativeStartPosition.z,
      );

      var geometry = new THREE.BoxBufferGeometry(400, 400, 400);
      var edges = new THREE.EdgesGeometry(geometry);
      var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x00ff00 }) );
      this.scene.add(line);

      const drawingTurtle = new WebGLTurtle(this.scene, {
        angle: this.params.angle,
        length: BASE_LENGTH * scalingFactor,
        startX: adjustedStart.x,
        startY: adjustedStart.y,
        startZ: adjustedStart.z,
      });

      this.executeRequestAnimFrame(drawingTurtle, instructions);
    });
  }

  executeRequestAnimFrame(turtle, instructions) {
    const batchSize = 50;

    let i = 0;
    const step = () => {
      for (let j = i; j < i + batchSize; j += 1) {
        TurtleUtils.executeCommand(turtle, this.commands[instructions[j]]);
      }

      // this.cameraX += 4;

      this.camera.position.set(1000, 500, 500);
      this.camera.lookAt(new THREE.Vector3(0, 0, 0));

      this.renderer.render(this.scene, this.camera);

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

  // render(deltaT) {

  // }

  // animLoop(render, element) {
  //   let running,
  //       lastFrame = +new Date;

  //   function loop( now ) {
  //     // stop the loop if render returned false
  //     if ( running !== false ) {
  //       requestAnimationFrame( loop, element );
  //       running = render( now - lastFrame );
  //       lastFrame = now;
  //     }
  //   }

  //   loop( lastFrame );
  // }

  cancel(onCancelDone) {
    this.onCancelDone = onCancelDone;
    this.shouldCancel = true;
  }
}
