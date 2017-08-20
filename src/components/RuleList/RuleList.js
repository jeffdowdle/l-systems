import React from 'react';
import PropTypes from 'prop-types';
import Rule from '../Rule';

const RuleList = ({
  rules,
  onRemoveRule,
  onAddRule,
  onUpdateRule,
}) => (
  <div>
    <ul>
      {rules.map(r => (
        <li key={r.id}>
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
            onClick={() => {
              onRemoveRule(r.id);
            }}
          >
            -
          </button>
        </li>
      ))}
    </ul>
    <button onClick={onAddRule}>Add rule</button>
  </div>
);

RuleList.propTypes = {
  rules: PropTypes.array.isRequired,
  onRemoveRule: PropTypes.func.isRequired,
  onAddRule: PropTypes.func.isRequired,
  onUpdateRule: PropTypes.func.isRequired,
};

export default RuleList;
