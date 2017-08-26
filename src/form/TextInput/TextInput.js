import React from 'react';
import PropTypes from 'prop-types';

const fieldId = id => `param-${id}`;

const TextInput = ({
  id,
  label,
  value,
  onChange,
}) => (
  <div>
    <label htmlFor={fieldId(id)}>{label}</label>
    <input
      id={fieldId(id)}
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </div>
);

TextInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
