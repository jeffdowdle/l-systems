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

const Presets = ({
  onClick,
}) => (
  <div>
    <button onClick={() => { onClick(new Preset(presetData[0])) }}>
      load 1
    </button>
    <button onClick={() => { onClick(new Preset(presetData[1])) }}>
      load 2
    </button>
  </div>
);

Presets.propTypes = {
  onChange: PropTypes.func.isRequired,
};



const mapDispatchToProps = dispatch => ({
  onClick: (preset) => {
    dispatch(presetsActions.loadPreset(preset));
  },
});

export default connect(null, mapDispatchToProps)(Presets);
