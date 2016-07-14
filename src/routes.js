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
             <Route path="vehicles" component={MenuPage} />
             <Route path="fleets" component={MenuPage} />
             <Route path="operators" component={MenuPage} />
             <Route path="drivers" component={MenuPage} />
             <Route path="analyses" component={MenuPage} />
             <Route path="themes" component={MenuPage} />
             <Route path="notification" component={MenuPage} />
      		</Route>
      </Route>
	);
};
