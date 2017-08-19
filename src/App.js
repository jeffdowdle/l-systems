import { connect } from 'react-redux';
import React from 'react';
import { actions as rulesActions } from './modules/rules';

const App = ({
  onClick,
}) => {
  return (
    <div>
      <button onClick={onClick}>Add</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(rulesActions.addRule());
  },
});

export default connect(null, mapDispatchToProps)(App);
