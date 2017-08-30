import React from 'react';
import PropTypes from 'prop-types';
import Rule from '../Rule';

import './rule-list.scss';

const RuleList = ({
  rules,
  onRemoveRule,
  onAddRule,
  onUpdateRule,
}) => (
  <div styleName="rules">
    <div styleName="rules-label">Rules</div>
    <ul styleName="rule-list">
      {rules.map(r => (
        <li styleName="rule-list-item" key={r.id}>
          <Rule
            rule={r}
            onUpdateSymbol={(symbol) => {
              onUpdateRule(r.id, { symbol });
            }}
            onUpdateSuccessor={(successor) => {
              onUpdateRule(r.id, { successor });
            }}
          />
          <button
            styleName="remove-rule"
            onClick={() => {
              onRemoveRule(r.id);
            }}
          >
            x
          </button>
        </li>
      ))}
    </ul>
    <div styleName="add-rule">
      <button onClick={onAddRule}>Add rule</button>
    </div>
  </div>
);

RuleList.propTypes = {
  rules: PropTypes.array.isRequired,
  onRemoveRule: PropTypes.func.isRequired,
  onAddRule: PropTypes.func.isRequired,
  onUpdateRule: PropTypes.func.isRequired,
};

export default RuleList;
