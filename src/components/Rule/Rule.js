import React from 'react';
import PropTypes from 'prop-types';

import './rule.scss';

const Rule = ({
  rule,
  onUpdateSymbol,
  onUpdateSuccessor,
}) => (
  <div styleName="rule">
    <div styleName="symbol">
      <input
        styleName="symbol"
        type="text"
        value={rule.symbol}
        onChange={(e) => {
          onUpdateSymbol(e.target.value);
        }}
      />
    </div>

    <div styleName="successor">
      <input
        type="text"
        value={rule.successor}
        onChange={(e) => {
          onUpdateSuccessor(e.target.value);
        }}
      />
    </div>
  </div>
);

Rule.defaultProps = {
  onUpdateSymbol: () => {},
  onUpdateSuccessor: () => {},
};

Rule.propTypes = {
  rule: PropTypes.object.isRequired,
  onUpdateSymbol: PropTypes.func.isRequired,
  onUpdateSuccessor: PropTypes.func.isRequired,
};

export default Rule;
