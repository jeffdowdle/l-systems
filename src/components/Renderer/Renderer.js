import React from 'react';
import PropTypes from 'prop-types';
import TurtleRenderer from '../../modules/lsystem/TurtleRenderer';
import { expand } from '../../modules/lsystem/functions';

class Renderer extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = null;
  }

  componentDidMount() {
    this.draw();
  }

  shouldComponentUpdate() {
    return false;
  }

  draw() {
    const { rules, axiom, params } = this.props;

    const turtle = new TurtleRenderer(this.canvas, { angle: params.angle });
    turtle.draw(expand(rules, axiom, params.iterations));
  }

  render() {
    return (
      <div>
        <canvas ref={(c) => { this.canvas = c; }} />
      </div>
    );
  }
}

Renderer.defaultProps = {
};

Renderer.propTypes = {
  params: PropTypes.object,
  axiom: PropTypes.string.isRequired,
  rules: PropTypes.array.isRequired,
};

export default Renderer;
