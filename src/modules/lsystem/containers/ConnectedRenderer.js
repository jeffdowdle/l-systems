import { connect } from 'react-redux';
import React from 'react';
import { selectors as iterationsSelectors } from '../../iterations';
import { selectors as rulesSelectors } from '../../rules';
import { selectors as axiomSelectors } from '../../axiom';
import { selectors as commandsSelectors } from '../../commands';
import {
  actions as paramsActions,
  selectors as paramsSelectors,
} from '../../params';
import {
  rendererTypes,
  selectors as renderersSelectors,
} from '../../renderers';
import { CanvasTurtleRenderView } from '../../renderers/canvasTurtle';


class ConnectedRenderer extends React.Component {
  constructor(props) {
    super(props);

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    window.addEventListener('redraw', this.handleUpdate);

    this.handleUpdate();
  }

  componentWillUnmount() {
    window.removeEventListener('redraw', this.handleUpdate);
  }

  handleUpdate() {
    if (this.renderer && this.renderer.draw) {
      this.renderer.draw();
    }
  }

  render() {
    const { rendererId } = this.props;

    let Renderer;

    switch (rendererId) {
      case rendererTypes.CANVAS_TURTLE:
      default:
        Renderer = CanvasTurtleRenderView;
    }

    return <Renderer {...this.props} ref={(r) => { this.renderer = r; }} />;
  }
}

const mapStateToProps = state => ({
  rendererId: renderersSelectors.getCurrentRenderer(state),
  params: paramsSelectors.getFlattenedParamsForRenderer(state),
  commands: commandsSelectors.getFlattenedCommandsForRenderer(state),
  rules: rulesSelectors.getRules(state),
  axiom: axiomSelectors.getAxiom(state),
  iterations: iterationsSelectors.getIterations(state),
});


const mapDispatchToProps = dispatch => ({
  onRegisterParam: (renderer, declaration) => {
    dispatch(paramsActions.registerParam(renderer, declaration));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedRenderer);
