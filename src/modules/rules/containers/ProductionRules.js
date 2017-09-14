import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {
  actions as rulesActions,
  selectors as rulesSelectors,
} from 'modules/rules';
import RuleList from 'components/RuleList';

const ProductionRules = props => <RuleList {...props} />;

ProductionRules.propTypes = {
  rules: PropTypes.array.isRequired,
  onAddRule: PropTypes.func.isRequired,
  onRemoveRule: PropTypes.func.isRequired,
  onUpdateRule: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  rules: rulesSelectors.getRules(state),
});

const mapDispatchToProps = dispatch => ({
  onAddRule: () => {
    dispatch(rulesActions.addRule());
  },
  onRemoveRule: (id) => {
    dispatch(rulesActions.removeRule(id));
  },
  onUpdateRule: (id, values) => {
    dispatch(rulesActions.updateRule(id, values));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductionRules);
