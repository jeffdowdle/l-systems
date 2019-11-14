import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {
  selectors as rendererSelectors,
  actions as rendererActions,
} from 'modules/renderer';
import SelectInput from 'form/SelectInput';
import { rendererTypes, renderers } from 'renderers';

const StategyChooser = ({
  currentRenderer,
  currentStrategy,
  onUpdateStrategy,
}) => {
  const renderer = renderers[currentRenderer];

  const options = Object.keys(renderer.strategies).map(key => ({
    label: renderer.strategies[key].name,
    value: key,
  }));

  return (
    <SelectInput
      id="strategy"
      label="Render strategy"
      value={currentStrategy}
      options={options}
      onChange={(value) => {
        onUpdateStrategy(currentRenderer, value);
      }}
    />
  );
};

const mapStateToProps = state => ({
  currentRenderer: rendererSelectors.getCurrentRenderer(state),
  currentStrategy: rendererSelectors.getCurrentStrategy(state),
});

const mapDispatchToProps = dispatch => ({
  onUpdateStrategy: (renderer, strategy) => {
    dispatch(rendererActions.updateRenderStrategy(renderer, strategy));
    dispatch(rendererActions.invalidateRendering());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StategyChooser);
