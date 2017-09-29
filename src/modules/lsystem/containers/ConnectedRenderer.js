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

    this.handleFinish = this.handleFinish.bind(this);
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

    const shouldCancel = !prevProps.currentRenderer.shouldCancel && this.props.currentRenderer.shouldCancel;

    if (shouldCancel) {
      this.cancel();
    }
  }

  update() {
    // Okay, we acknowledge we have to re-render now.
    this.props.onValidateRendering();

    // Cancel the current render if there's one in progress, then draw
    if (this.props.currentRenderer.isDrawing) {
      // Raise an action so other components can know what's going on.
      this.props.onCancel();

      this.renderer.cancel(() => {
        this.props.onFinishDraw();

        this.draw();
      });
    // Otherwise just draw it.
    } else {
      this.draw();
    }
  }

  draw() {
    this.props.onStartDraw();
    this.renderer.draw();
  }

  cancel() {
    if (!this.props.currentRenderer.isDrawing) { return; }

    this.renderer.cancel(() => {
      this.props.onFinishDraw();
    });
  }

  handleFinish() {
    this.props.onFinishDraw();
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

    return (
      <div>
        <div>{currentRenderer.isDrawing ? 'DRAWING' : 'NOT DRAWING'}</div>
        <RenderComponent
          {...this.props}
          onFinish={this.handleFinish}
          ref={(r) => { this.renderer = r; }}
        />
      </div>
    );
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
  onStartDraw: () => {
    dispatch(rendererActions.startDraw());
  },
  onFinishDraw: () => {
    dispatch(rendererActions.finishDraw());
  },
  onCancel: () => {
    dispatch(rendererActions.cancelDraw());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedRenderer);
