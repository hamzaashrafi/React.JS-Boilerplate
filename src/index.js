import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Routers from './routers';
import store from './store';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Routers />
  </Provider>,
  document.getElementById('root')
);
// serviceWorker.unregister();
