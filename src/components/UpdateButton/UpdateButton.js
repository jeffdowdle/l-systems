import React from 'react';

import './update-button.scss';

const UpdateButton = () => (
  <button
    styleName="update-button"
    onClick={() => {
      window.dispatchEvent(new Event('redraw'));
    }}
  >
    Update
  </button>
);

export default UpdateButton;
