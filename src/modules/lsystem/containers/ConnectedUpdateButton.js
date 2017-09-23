import { connect } from 'react-redux';
import React from 'react';
import {
  actions as rendererActions,
} from 'modules/renderer';
import UpdateButton from 'components/UpdateButton';


const ConnectedUpdateButton = ({
  onInvalidateRendering,
}) => (
  <UpdateButton
    onClick={onInvalidateRendering}
  />
);


const mapDispatchToProps = dispatch => ({
  onInvalidateRendering: () => {
    dispatch(rendererActions.invalidateRendering());
  },
});

export default connect(null, mapDispatchToProps)(ConnectedUpdateButton);
