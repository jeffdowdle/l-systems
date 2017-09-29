import React from 'react';

import './update-button.scss';

const UpdateButton = ({
  onClick,
  label,
}) => (
  <button
    styleName="update-button"
    onClick={onClick}
  >
    {label}
  </button>
);

export default UpdateButton;
