import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import getRoutes from './routes';

window.React = React; // enable debugger

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const appRootComponent = () => (
    <Provider store={store}>
      <Router history={history} routes={getRoutes()}/>
    </Provider>
);
// Render the main component into the dom
ReactDOM.render(appRootComponent(), document.getElementById('app'));
