import React from 'react';
import PropTypes from 'prop-types';
import Control from '../Control';
import Label from '../Label';

import './text-input.scss';

const fieldId = id => `param-${id}`;

const TextInput = ({
  id,
  label,
  value,
  onChange,
}) => (
  <Control>
    <Label htmlFor={fieldId}>{label}</Label>
    <input
      id={fieldId(id)}
      styleName="text-input"
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </Control>
);

TextInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
