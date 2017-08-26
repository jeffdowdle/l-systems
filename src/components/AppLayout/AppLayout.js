import React from 'react';
import PropTypes from 'prop-types';
import './app-layout.scss';

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

export default AppLayout;
