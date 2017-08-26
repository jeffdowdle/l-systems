import React from 'react';
import PropTypes from 'prop-types';
import './app-layout.css';

export const AppLayout = props => (
  <div styleName="layout-container">
    {props.children}
  </div>
);

export const AppLayoutSideBar = props => (
  <div styleName="layout-side-bar">
    {props.children}
  </div>
);

export const AppLayoutMain = props => (
  <div styleName="layout-main">
    {props.children}
  </div>
);

AppLayout.propTypes = {
  rules: PropTypes.array.isRequired,
  onRemoveRule: PropTypes.func.isRequired,
  onAddRule: PropTypes.func.isRequired,
  onUpdateRule: PropTypes.func.isRequired,
};

export default AppLayout;
