import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {
  selectors as commandsSelectors,
} from '../../../commands';
import {
  commandDefinitions,
  selectors as rendererSelectors,
} from '../../../renderers';
import Control from '../../../../form/Control';
import Label from '../../../../form/Label';
import Command from '../../../../components/Command';

const Params = ({
  commands,
  renderer,
}) => {
  if (!commands) { return null; }

  return (
    <div>
      {commands.map((command) => {
        const definition = commandDefinitions[renderer].find(d => d.id === command.value);

        return (
          <Command symbol={command.symbol} command={definition} />
        );
      })}
    </div>
  );
};

Params.propTypes = {
};

const mapStateToProps = state => ({
  commands: commandsSelectors.getCurrentRendererCommands(state),
  renderer: rendererSelectors.getCurrentRenderer(state),
});

export default connect(mapStateToProps, null)(Params);
