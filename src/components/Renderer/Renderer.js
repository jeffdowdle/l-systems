import React from 'react';
import PropTypes from 'prop-types';
import TurtleRenderer from '../../modules/lsystem/TurtleRenderer';

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
    const turtle = new TurtleRenderer(this.canvas);
    turtle.draw(this.props.instructions);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.draw()}>Redraw</button>
        <canvas ref={(c) => { this.canvas = c; }} />
      </div>
    );
  }
}

Renderer.defaultProps = {
};

Renderer.propTypes = {
  instructions: PropTypes.string.isRequired,
};

export default Renderer;
