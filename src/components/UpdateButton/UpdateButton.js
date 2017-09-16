import React from 'react';

import './update-button.scss';

const UpdateButton = ({
  onClick,
}) => (
  <button
    styleName="update-button"
    onClick={onClick}
  >
    Update
  </button>
);

export default UpdateButton;
