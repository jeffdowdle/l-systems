// @flow

import { connect } from 'react-redux';
import * as React from 'react';
import { selectors as iterationsSelectors } from 'modules/iterations';
import { selectors as rulesSelectors } from 'modules/rules';
import { selectors as axiomSelectors } from 'modules/axiom';
import { selectors as commandsSelectors } from 'modules/commands';
import {
  actions as paramsActions,
  selectors as paramsSelectors,
} from 'modules/params';
import {
  actions as rendererActions,
  selectors as renderersSelectors,
} from 'modules/renderer';
import {
  rendererTypes,
  renderers,
} from 'renderers';

type Props = {
  currentRenderer: Object,
  params: Object,
  commands: Object,
  rules: Array<Object>,
  axiom: string,
  iterations: number,
  onRegisterParam: Function,
  onValidateRendering: Function,
};

class ConnectedRenderer extends React.Component<Props> {
  renderer: CanvasTurtleRenderView;

  constructor(props) {
    super(props);
    this.renderer = null;
  }

  componentDidMount() {
    this.update();
  }

  componentDidUpdate(prevProps) {
    const wasValid = prevProps.currentRenderer.renderingIsValid;
    const isValid = this.props.currentRenderer.renderingIsValid;

    if (wasValid && !isValid) {
      this.update();
    }
  }

  update() {
    this.props.onValidateRendering();

    if (this.renderer && this.renderer.draw) {
      this.renderer.draw();
    }
  }

  render() {
    const { currentRenderer } = this.props;

    let RenderComponent;

    const renderer = renderers[currentRenderer.type];

    if (!renderer) {
      console.warn(`Couldn't find a renderer with the type '${currentRenderer.type}'`);

      this.renderer = null;
      return null;
    }
    const strategy = renderer.strategies[currentRenderer.strategy];

    switch (currentRenderer.type) {
      case rendererTypes.RENDERER_2D:
      default:
        RenderComponent = strategy.Component;
    }

    return <RenderComponent {...this.props} ref={(r) => { this.renderer = r; }} />;
  }
}

const mapStateToProps = state => ({
  currentRenderer: renderersSelectors.selectRenderer(state),
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
  onValidateRendering: () => {
    dispatch(rendererActions.validateRendering());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedRenderer);
