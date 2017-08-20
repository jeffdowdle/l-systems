import { connect } from 'react-redux';
import React from 'react';
import { actions as rulesActions } from './modules/rules';
import styles from './style.css'; // eslint-disable-line no-unused-vars

const App = ({
  onClick,
}) => {
  return (
    <div styleName="styles.test">
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
