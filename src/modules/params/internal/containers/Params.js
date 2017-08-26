import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {
  actions as paramsActions,
  selectors as paramsSelectors,
} from '../../../params';

const Params = ({
  iterations,
  onChangeIterations,
  angle,
  onChangeAngle,
}) => (
  <div>
    <input
      type="number"
      value={iterations}
      onChange={e => onChangeIterations(e.target.value)}
    />

    <input
      type="number"
      value={angle}
      onChange={e => onChangeAngle(e.target.value)}
    />
  </div>
);

Params.propTypes = {
  iterations: PropTypes.number.isRequired,
  onChangeIterations: PropTypes.func.isRequired,
  angle: PropTypes.number.isRequired,
  onChangeAngle: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  iterations: paramsSelectors.getIterations(state),
  angle: paramsSelectors.getAngle(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeIterations: (val) => {
    const iterations = parseInt(val, 10);
    dispatch(paramsActions.updateIterations(iterations));
  },

  onChangeAngle: (val) => {
    const angle = parseInt(val, 10);
    dispatch(paramsActions.updateAngle(angle));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Params);
