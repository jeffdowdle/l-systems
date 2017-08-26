import React from 'react';
import PropTypes from 'prop-types';

const fieldId = id => `param-${id}`;

const NumberInput = ({
  id,
  label,
  value,
  onChange,
}) => (
  <div>
    <label htmlFor={fieldId(id)}>{label}</label>
    <input
      id={fieldId(id)}
      type="number"
      value={value}
      onChange={e => onChange(parseInt(e.target.value, 10))}
    />
  </div>
);

NumberInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NumberInput;
