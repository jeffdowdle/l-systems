import { connect } from 'react-redux';
import React from 'react';
import { selectors as rulesSelectors } from '../../../rules';
import { selectors as axiomSelectors } from '../../../axiom';
import Renderer from '../../../../components/Renderer';

const ConnectedRenderer = props => <Renderer {...props} />;

const mapStateToProps = state => ({
  rules: rulesSelectors.getRules(state),
  axiom: axiomSelectors.getAxiom(state),
});

export default connect(mapStateToProps, null)(ConnectedRenderer);
