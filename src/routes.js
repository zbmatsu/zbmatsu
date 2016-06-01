import React from 'react';
import { Route } from 'react-router';
import Main from './components/Main';

export default () => {


  return (
		<Route path="/" component={Main}>
			<Route path="login" component={Main} />
		</Route>
	);
};
