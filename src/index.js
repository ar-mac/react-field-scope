import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import appReducer from './store/reducers';
import './index.css';
import App from './App';

const store = createStore(appReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
