import { connect } from 'react-redux';
import React from 'react';
import {
  actions as rendererActions,
  selectors as rendererSelectors,
} from 'modules/renderer';
import UpdateButton from 'components/UpdateButton';


const ConnectedUpdateButton = ({
  renderer,
  onInvalidateRendering,
  onCancelDraw,
}) => {
  if (renderer.isDrawing) {
    return <UpdateButton onClick={onCancelDraw} label="Rendering... Cancel?" />
  }

  return <UpdateButton onClick={onInvalidateRendering} label="Update" />
};

const mapStateToProps = state => ({
  renderer: rendererSelectors.selectRenderer(state),
});

const mapDispatchToProps = dispatch => ({
  onInvalidateRendering: () => {
    dispatch(rendererActions.invalidateRendering());
  },
  onCancelDraw: () => {
    dispatch(rendererActions.requestCancelDraw());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedUpdateButton);
