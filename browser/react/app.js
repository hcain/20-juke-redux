'use strict';

import { Provider } from 'react-redux';

import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import Store from './myRedux';


ReactDOM.render(
  <Provider store={Store}>
    <AppContainer />
  </Provider>
);
