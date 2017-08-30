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
    <div styleName="side-bar-main">
      {props.children}
    </div>
    {props.footer &&
      <div styleName="side-bar-footer">
        {props.footer}
      </div>
    }
  </div>
);

export const AppLayoutMain = props => (
  <div styleName="layout-main">
    {props.children}
  </div>
);

export default AppLayout;
