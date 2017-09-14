import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {
  selectors as rendererSelectors,
  actions as rendererActions,
} from 'modules/renderers';

const RendererChooser = ({
  renderer,
  onUpdateRenderer,
}) => {
  return (
    <div>
      <select value={renderer} onChange={e => onUpdateRenderer(e.target.value)}>
        <option value={undefined}>Select a renderer</option>
        <option value="CANVAS_TURTLE">Canvas turtle</option>
      </select>
    </div>
  );
};

const mapStateToProps = state => ({
  renderer: rendererSelectors.getCurrentRenderer(state),
});

const mapDispatchToProps = dispatch => ({
  onUpdateRenderer: (renderer) => {
    dispatch(rendererActions.updateRenderer(renderer));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RendererChooser);
