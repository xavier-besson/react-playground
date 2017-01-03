import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from 'components/app';
import Home from 'components/pages/home';
import UixDashboard from 'components/pages/uix/dashboard';
import UixSortable from 'components/pages/uix/sortable';


export default (
	<Route path='/' component={App}>
		<IndexRoute component={Home} />
		<Route path='uix'>
			<IndexRoute component={UixDashboard} />
			<Route path='sortable' component={UixSortable} />
		</Route>
	</Route>
);
