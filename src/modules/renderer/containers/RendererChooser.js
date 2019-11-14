import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {
  selectors as rendererSelectors,
  actions as rendererActions,
} from 'modules/renderer';
import SelectInput from 'form/SelectInput';
import { rendererTypes } from 'renderers';

const RendererChooser = ({
  renderer,
  onUpdateRenderer,
}) => {
  const options = [
    {
      label: '2d',
      value: rendererTypes.RENDERER_2D,
    },
    {
      label: '3d',
      value: rendererTypes.RENDERER_3D,
    },
  ];

  return (
    <SelectInput
      id="renderer"
      label="Renderer"
      value={renderer}
      options={options}
      onChange={onUpdateRenderer}
    />
  );
};

const mapStateToProps = state => ({
  renderer: rendererSelectors.getCurrentRenderer(state),
});

const mapDispatchToProps = dispatch => ({
  onUpdateRenderer: (renderer) => {
    dispatch(rendererActions.updateRenderer(renderer));
    dispatch(rendererActions.invalidateRendering());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RendererChooser);
