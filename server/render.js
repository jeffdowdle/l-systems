import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';

import createPage from './html';

import rootReducer from '../src/rootReducer';
import App from '../src/App';

const handleRender = (req, res) => {
  const store = createStore(rootReducer);
  const preloadedState = store.getState();

  const renderedApp = renderToString((
    <Provider store={store}>
      <App />
    </Provider>
  ));

  res.send(createPage(renderedApp, preloadedState));
};


export default handleRender;
