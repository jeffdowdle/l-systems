import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {
  actions as iterationsActions,
  selectors as iterationsSelectors,
} from 'modules/iterations';
import RangeInput from 'form/RangeInput';

const Iterations = ({
  iterations,
  onChange,
}) => (
  <RangeInput
    id="iterations"
    label="Iterations"
    value={iterations}
    onChange={onChange}
    min={1}
    max={12}
  />
);

Iterations.propTypes = {
  iterations: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  iterations: iterationsSelectors.getIterations(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: (iterations) => {
    dispatch(iterationsActions.updateIterations(iterations));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Iterations);
