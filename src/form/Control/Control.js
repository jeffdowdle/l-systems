import React from 'react';
import PropTypes from 'prop-types';
import './control.scss';

const Control = props => (
  <div styleName="control">
    {props.children}
  </div>
);

export default Control;
