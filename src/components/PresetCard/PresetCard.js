import React from 'react';
import PropTypes from 'prop-types';

import './preset-card.scss';

const PresetCard = ({
  preset,
  onLoadClicked,
}) => (
  <div styleName="preset-card">
    <span styleName="title">{preset.title}</span>
    <button styleName="load-preset" onClick={onLoadClicked}>Load</button>
  </div>
);

export default PresetCard;
