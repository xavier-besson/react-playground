import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from 'components/app';
import HomePage from 'components/pages/home';
import UixDashboardPage from 'components/pages/uix/dashboard';
import UixSortablePage from 'components/pages/uix/sortable';
import LearnDashboardPage from 'components/pages/learn/dashboard';
import LearnLifeCyclePage from 'components/pages/learn/life-cycle';

export default (
	<Route
		path="/"
		component={App}>
		<IndexRoute component={HomePage} />
		<Route path="learn">
			<IndexRoute component={LearnDashboardPage} />
			<Route
				path="life-cycle"
				component={LearnLifeCyclePage}
			/>
		</Route>
		<Route path="uix">
			<IndexRoute component={UixDashboardPage} />
			<Route
				path="sortable"
				component={UixSortablePage}
			/>
		</Route>
	</Route>
);
