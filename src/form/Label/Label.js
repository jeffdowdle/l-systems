import React from 'react';
import PropTypes from 'prop-types';
import './label.scss';

const Label = ({
  htmlFor,
  children,
}) => (
  <label styleName="label" htmlFor={htmlFor}>{children}</label>
);

export default Label;
