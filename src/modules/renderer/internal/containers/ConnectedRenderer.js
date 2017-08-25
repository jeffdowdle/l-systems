import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import * as selectors from '../selectors';
import Renderer from '../../../../components/Renderer';

const ConnectedRenderer = ({
  instructions,
}) => (
  <Renderer
    instructions={instructions}
  />
);

ConnectedRenderer.propTypes = {
  instructions: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  instructions: selectors.getInstructions(state),
});

export default connect(mapStateToProps, null)(ConnectedRenderer);
