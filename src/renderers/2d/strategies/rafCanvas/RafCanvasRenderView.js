import React from 'react';
import PropTypes from 'prop-types';
import { expand } from 'modules/lsystem/functions';
import RafCanvas from './RafCanvas';

class RafCanvasRenderView extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = null;
  }

  shouldComponentUpdate() {
    return false;
  }

  draw() {
    const { params, commands, rules, axiom, iterations } = this.props;
    const turtle = new RafCanvas(this.canvas, params, commands);
    turtle.draw(expand(rules, axiom, iterations));
  }

  render() {
    return (
      <div>
        <canvas ref={(c) => { this.canvas = c; }} />
      </div>
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
