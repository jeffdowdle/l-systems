import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Control from '../Control';
import Label from '../Label';

import './range-input.scss';

const fieldId = id => `param-${id}`;

const range = (lowEnd, highEnd) => {
  const list = [];
  for (let i = lowEnd; i <= highEnd; i += 1) {
    list.push(i);
  }
  return list;
};

const RangeInput = ({
  id,
  label,
  min,
  max,
  value,
  onChange,
}) => (
  <Control>
    <Label htmlFor={fieldId}>{label}</Label>
    <div>
      <input
        id={fieldId(id)}
        styleName="range-input"
        type="range"
        value={value}
        onChange={e => onChange(parseInt(e.target.value, 10))}
        min={min}
        max={max}
      />
      <div styleName="range-labels" aria-hidden="true">
        {range(min, max).map((n) => {
          const styles = classNames({
            'range-label': true,
            'range-label-active': n === value,
          });

          return (
            <span
              key={n}
              styleName={styles}
              style={{ left: `${(100 / (max - min)) * (n - 1)}%` }}
              onClick={() => onChange(n)}
            >
              {n}
            </span>
          );
        })}
      </div>
    </div>
  </Control>
);

RangeInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RangeInput;
