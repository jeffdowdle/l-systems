import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {
  actions as axiomActions,
  selectors as axiomSelectors,
} from 'modules/axiom';
import TextInput from 'form/TextInput';

const ProductionRules = ({
  axiom,
  onChange,
}) => (
  <TextInput
    id="axiom"
    label="Axiom"
    value={axiom}
    onChange={(value) => {
      onChange(value);
    }}
  />
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
