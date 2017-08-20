import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {
  actions as axiomActions,
  selectors as axiomSelectors,
} from '../../../axiom';

const ProductionRules = ({
  axiom,
  onChange,
}) => (
  <label>
    Axiom:
    <input
      value={axiom}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  </label>
);

ProductionRules.propTypes = {
  axiom: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  axiom: axiomSelectors.getAxiom(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: (axiom) => {
    dispatch(axiomActions.updateAxiom(axiom));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductionRules);
