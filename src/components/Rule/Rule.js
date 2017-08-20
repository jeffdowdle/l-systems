import React from 'react';
import PropTypes from 'prop-types';

const Rule = ({
  rule,
  onUpdateSymbol,
  onUpdateSuccessor,
}) => (
  <div>
    <input
      type="text"
      value={rule.symbol}
      onChange={(e) => {
        onUpdateSymbol(e.target.value);
      }}
    />

    <input
      type="text"
      value={rule.successor}
      onChange={(e) => {
        onUpdateSuccessor(e.target.value);
      }}
    />
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
