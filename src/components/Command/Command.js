import React from 'react';
import PropTypes from 'prop-types';

import './command.scss';

const Command = ({
  symbol,
  command,
}) => (
  <div styleName="command">
    <div styleName="value">
      {command.label}
    </div>

    <div styleName="symbols">
      {command.defaultSymbols.map(s => (
        <div styleName="symbol">
          {s}
        </div>
      ))}
    </div>
  </div>
);

Command.defaultProps = {
};

Command.propTypes = {
  command: PropTypes.object.isRequired,
};

export default Command;
