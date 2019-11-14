import React from 'react';
import PropTypes from 'prop-types';
import ExpandWorker from 'modules/lsystem/expand.worker';
import WebGLRenderer from './WebGLRenderer';

class WebGLRenderView extends React.Component {
  constructor(props) {
    super(props);
    this.container = null;
    this.renderer = null;
    this.isCancelling = false;
  }

  shouldComponentUpdate() {
    return false;
  }

  draw() {
    const { params, commands, rules, axiom, iterations } = this.props;
    this.renderer = new WebGLRenderer(this.container, params, commands);

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
      <div ref={(c) => { this.container = c; }} />
    );
  }
}

WebGLRenderView.defaultProps = {
};

WebGLRenderView.propTypes = {
  params: PropTypes.object,
  commands: PropTypes.object,
  axiom: PropTypes.string.isRequired,
  rules: PropTypes.array.isRequired,
  iterations: PropTypes.number.isRequired,
};

export default WebGLRenderView;
