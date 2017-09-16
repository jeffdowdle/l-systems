import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {
  actions as presetsActions,
  selectors as presetsSelectors,
} from 'modules/presets';
import TextInput from 'form/TextInput';
import presetData from 'modules/presets/presetData';
import Preset from 'modules/presets/models/Preset';
import PresetList from 'components/PresetList';

const Presets = ({
  onLoadPreset
}) => (
  <PresetList
    onLoadPreset={onLoadPreset}
    presets={
      presetData.map(d => new Preset(d))
    }
  />
);

Presets.propTypes = {
  onChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onLoadPreset: (preset) => {
    dispatch(presetsActions.loadPreset(preset));
  },
});

export default connect(null, mapDispatchToProps)(Presets);
