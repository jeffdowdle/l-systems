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

const paramDeclarations = [
  {
    id: 'iterations',
    label: 'Iterations',
    fieldType: 'RANGE',
    initialValue: 3,
    min: 1,
    max: 8,
  },
  {
    id: 'angle',
    label: 'Angle',
    fieldType: 'NUMBER',
    initialValue: 90,
  },
];

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

class Params extends React.Component {
  componentWillMount() {
    paramDeclarations.forEach((declaration) => {
      this.props.onRegisterParam(declaration);
    });
  }

  render() {
    return (
      <div>
        {this.props.params.map((param) => {
          const declaration = paramDeclarations.find(d => d.id === param.id);
          const Field = mapFieldTypeToComponent(declaration.fieldType);

          return (
            <Field
              {...declaration}
              key={param.id}
              value={param.value}
              onChange={(value) => {
                this.props.onUpdateParam(param.id, value);
              }}
            />
          );
        })}
      </div>
    );
  }
}

Params.propTypes = {
};

const mapStateToProps = state => ({
  params: paramsSelectors.getParams(state),
});

const mapDispatchToProps = dispatch => ({
  onRegisterParam: (declaration) => {
    dispatch(paramsActions.registerParam(declaration));
  },

  onUpdateParam: (id, value) => {
    dispatch(paramsActions.updateParam(id, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Params);
