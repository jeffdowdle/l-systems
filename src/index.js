import { devToolsEnhancer } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/global.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './rootReducer';
import App from './App';

// Get server rendered redux state
const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const render = (Component) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    devToolsEnhancer(),
  );

  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('app-root'),
  );
};

render(App);
