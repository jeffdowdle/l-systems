import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {
  actions as paramsActions,
  selectors as paramsSelectors,
} from '../../../params';
import TextInput from '../../../../form/TextInput';
import RangeInput from '../../../../form/RangeInput';
import NumberInput from '../../../../form/NumberInput';
import {
  paramDefinitions,
  selectors as rendererSelectors,
} from '../../../renderers';

const mapFieldTypeToComponent = (fieldType) => {
  switch (fieldType) {
    case 'RANGE':
      return RangeInput;
    case 'NUMBER':
      return NumberInput;
    case 'TEXT':
    default:
      return TextInput;
  }
};

const Params = ({
  params,
  renderer,
  onUpdateParam,
}) => {
  if (!params) { return null; }

  return (
    <div>
      {params.map((param) => {
        const declaration = paramDefinitions[renderer].find(d => d.id === param.id);
        const Field = mapFieldTypeToComponent(declaration.fieldType);

        return (
          <Field
            {...declaration}
            key={param.id}
            value={param.value}
            onChange={(value) => {
              onUpdateParam(renderer, param.id, value);
            }}
          />
        );
      })}
    </div>
  );
};

Params.propTypes = {
};

const mapStateToProps = state => ({
  params: paramsSelectors.getCurrentRendererParams(state),
  renderer: rendererSelectors.getCurrentRenderer(state),
});

const mapDispatchToProps = dispatch => ({
  onUpdateParam: (renderer, param, value) => {
    dispatch(paramsActions.updateParam(renderer, param, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Params);
