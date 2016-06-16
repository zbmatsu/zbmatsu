import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import getRoutes from './routes';

import themes from './themes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import injectTapEvent from 'react-tap-event-plugin';

window.React = React; // enable debugger
injectTapEvent();// material-ui component event

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

let customTheme = getMuiTheme(themes());
let componentTheme = {
  	tableRow: {
      	stripeColor: '#f5f5f5',
      	selectedColor: 'rgba(255, 0, 0, 0.1)',
     		borderColor: '#ffffff'
  	},
  	radioButton:{
      	checkedColor: '#ff0000',
      	borderColor:'#999999'
  	},
	  tableHeaderColumn: {
    	 spacing: 18,
       height: 48
    },
    tableRowColumn: {
    	 spacing: 18,
    	 height: 48
    },
  	checkbox: {
    	 checkedColor: '#ff0000'
  	}
};
let muiTheme = Object.assign({}, customTheme, componentTheme);

const appRootComponent = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            <Router history={history} routes={getRoutes()}/>
        </Provider>
    </MuiThemeProvider>
);
// Render the main component into the dom
ReactDOM.render(appRootComponent(), document.getElementById('app'));
