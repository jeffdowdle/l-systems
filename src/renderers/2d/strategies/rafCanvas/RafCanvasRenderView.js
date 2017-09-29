import ExpandWorker from 'worker-loader!./expand.worker';

import React from 'react';
import PropTypes from 'prop-types';
import RafCanvas from './RafCanvas';

class RafCanvasRenderView extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = null;
    this.renderer = null;
    this.isCancelling = false;
  }

  shouldComponentUpdate() {
    return false;
  }

  draw() {
    const { params, commands, rules, axiom, iterations } = this.props;
    this.renderer = new RafCanvas(this.canvas, params, commands);

    // Expanding the l-system can be a very heavy task, so run it in a seperate thread.
    const worker = new ExpandWorker();
    worker.postMessage({
      type: 'RUN',
      value: {
        rules,
        axiom,
        iterations,
      }
    })

    worker.onmessage = (e) => {
      // Teardown the worker
      worker.postMessage({ type: 'CLOSE' });

      const instructions = e.data;

      this.renderer.draw(instructions, () => {
        if (!this.isCancelling) {
          this.props.onFinish();
        }

        this.isCancelling = false;
      });
    }
  }

  cancel(onCancelDone) {
    this.isCancelling = true;
    this.renderer.cancel(onCancelDone);
  }

  render() {
    return (
      <canvas ref={(c) => { this.canvas = c; }} />
    );
  }
}

RafCanvasRenderView.defaultProps = {
};

RafCanvasRenderView.propTypes = {
  params: PropTypes.object,
  commands: PropTypes.object,
  axiom: PropTypes.string.isRequired,
  rules: PropTypes.array.isRequired,
  iterations: PropTypes.number.isRequired,
};

export default RafCanvasRenderView;
