import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {
  selectors as commandsSelectors,
} from 'modules/commands';
import {
  commandDefinitions,
  selectors as rendererSelectors,
} from 'modules/renderer';
import CommandList from 'components/CommandList';

const Params = ({
  commands,
  renderer,
}) => {
  if (!commands) { return null; }

  return (
    <CommandList commands={renderer.commands} />
  );
};

Params.propTypes = {
};

const mapStateToProps = state => ({
  commands: commandsSelectors.getCurrentRendererCommands(state),
  renderer: rendererSelectors.getRenderer(state),
});

export default connect(mapStateToProps, null)(Params);
