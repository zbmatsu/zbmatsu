import React from 'react';
import { Route } from 'react-router';
import MainPage from './pages/Main';
import MenuPage from './pages/Menu';
import TestPage from './pages/Test';

export default () => {


  return (
      <Route>
      		<Route path="/" component={MainPage}>
      			 <Route path="menu" component={MenuPage} />
             <Route path="test" component={TestPage} />
      		</Route>
      </Route>
	);
};
