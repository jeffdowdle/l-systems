import React from 'react';
import PropTypes from 'prop-types';
import { expand } from 'modules/lsystem/functions';
import NaiveCanvas from './NaiveCanvas';

class NaiveCanvasRenderView extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = null;
  }

  shouldComponentUpdate() {
    return false;
  }

  draw() {
    const { params, commands, rules, axiom, iterations } = this.props;
    const turtle = new NaiveCanvas(this.canvas, params, commands);
    turtle.draw(expand(rules, axiom, iterations));
    this.props.onFinish();
  }

  cancel() {
    // no point :P
  }

  render() {
    return (
      <canvas ref={(c) => { this.canvas = c; }} />
    );
  }
}

NaiveCanvasRenderView.defaultProps = {
};

NaiveCanvasRenderView.propTypes = {
  params: PropTypes.object,
  commands: PropTypes.object,
  axiom: PropTypes.string.isRequired,
  rules: PropTypes.array.isRequired,
  iterations: PropTypes.number.isRequired,
};

export default NaiveCanvasRenderView;
