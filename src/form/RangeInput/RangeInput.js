import React from 'react';
import PropTypes from 'prop-types';

const fieldId = id => `param-${id}`;

const RangeInput = ({
  id,
  label,
  min,
  max,
  value,
  onChange,
}) => (
  <div>
    <label htmlFor={fieldId(id)}>{label}</label>
    <input
      id={fieldId(id)}
      type="range"
      value={value}
      onChange={e => onChange(parseInt(e.target.value, 10))}
      min={min}
      max={max}
    />
  </div>
);

RangeInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RangeInput;
