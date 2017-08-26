import { connect } from 'react-redux';
import React from 'react';
import { selectors as rulesSelectors } from '../../../rules';
import { selectors as axiomSelectors } from '../../../axiom';
import Renderer from '../../../../components/Renderer';


class ConnectedRenderer extends React.Component {
  constructor(props) {
    super(props);

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    window.addEventListener('redraw', this.handleUpdate);
  }

  componentWillUnmount() {
    window.removeEventListener('redraw', this.handleUpdate);
  }

  handleUpdate() {
    if (this.renderer && this.renderer.draw) {
      this.renderer.draw();
    }
  }

  render() {
    return <Renderer {...this.props} ref={(r) => { this.renderer = r; }} />;
  }
}

const mapStateToProps = state => ({
  rules: rulesSelectors.getRules(state),
  axiom: axiomSelectors.getAxiom(state),
});

export default connect(mapStateToProps, null)(ConnectedRenderer);
