import { devToolsEnhancer } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/global.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './rootReducer';
import App from './App';

const render = (Component) => {
  const store = createStore(
    rootReducer,
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
