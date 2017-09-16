import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {
  selectors as rendererSelectors,
  actions as rendererActions,
} from 'modules/renderers';
import SelectInput from 'form/SelectInput';

const RendererChooser = ({
  renderer,
  onUpdateRenderer,
}) => {
  const options = [
    {
      label: 'Select a renderer',
      value: undefined,
    },
    {
      label: 'Canvas turtle',
      value: 'CANVAS_TURTLE',
    },
  ];

  return (
    // <div>
    //   <select value={renderer} onChange={e => onUpdateRenderer(e.target.value)}>
    //     <option value={undefined}>Select a renderer</option>
    //     <option value="CANVAS_TURTLE">Canvas turtle</option>
    //   </select>
    // </div>

    <SelectInput
      id="renderer"
      label="Renderer"
      value={renderer}
      options={options}
      onChange={onUpdateRenderer}
    />
  );
};

const mapStateToProps = state => ({
  renderer: rendererSelectors.getCurrentRenderer(state),
});

const mapDispatchToProps = dispatch => ({
  onUpdateRenderer: (renderer) => {
    dispatch(rendererActions.updateRenderer(renderer));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RendererChooser);
