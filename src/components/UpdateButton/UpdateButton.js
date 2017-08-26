import React from 'react';

const UpdateButton = () => (
  <button
    onClick={() => {
      window.dispatchEvent(new Event('redraw'));
    }}
  >
    Update
  </button>
);

export default UpdateButton;
