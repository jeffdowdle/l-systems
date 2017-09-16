import React from 'react';
import PropTypes from 'prop-types';
import PresetCard from 'components/PresetCard';

import './preset-list.scss';

const PresetList = ({
  presets,
  onLoadPreset,
}) => (
  <div styleName="preset-list">
    {presets.map(p => (
      <PresetCard preset={p} onLoadClicked={() => { onLoadPreset(p); }} />
    ))}
  </div>
);

export default PresetList;
