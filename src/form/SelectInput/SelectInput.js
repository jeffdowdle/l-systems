import React from 'react';
import PropTypes from 'prop-types';
import Control from '../Control';
import Label from '../Label';

import './select-input.scss';

const fieldId = id => `param-${id}`;

const Option = ({
  label,
  value,
}) => (
  <option value={value}>{label}</option>
);

const SelectInput = ({
  id,
  label,
  value,
  onChange,
  options,
}) => (
  <Control>
    <Label htmlFor={fieldId}>{label}</Label>
    {/* <input
      id={fieldId(id)}
      styleName="select-input"
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
    /> */}
    <select
      id={fieldId(id)}
      styleName="select-input"
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      {(options || []).map(o => <Option {...o} />)}
    </select>
  </Control>
);

SelectInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectInput;
