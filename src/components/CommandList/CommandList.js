import React from 'react';
import PropTypes from 'prop-types';

import Command from 'components/Command';

import './command-list.scss';

const CommandList = ({
  commands,
}) => {
  return (
    <div styleName="command-list">
      {commands.map(c => <Command command={c} />)}
    </div>
  );
};

CommandList.defaultProps = {
};

CommandList.propTypes = {
  commands: PropTypes.array.isRequired,
};

export default CommandList;
