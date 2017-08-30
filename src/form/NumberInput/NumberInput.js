import React from 'react';
import PropTypes from 'prop-types';
import Control from '../Control';
import Label from '../Label';

import './number-input.scss';

const fieldId = id => `param-${id}`;

const NumberInput = ({
  id,
  label,
  value,
  onChange,
}) => (
  <Control>
    <Label htmlFor={fieldId}>{label}</Label>
    <input
      styleName="number-input"
      id={fieldId(id)}
      type="number"
      value={value}
      onChange={e => onChange(parseInt(e.target.value, 10))}
    />
  </Control>
);

NumberInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NumberInput;
