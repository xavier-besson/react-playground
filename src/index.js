import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import appReducers from 'reducers';
import routes from 'routes';

const store = createStore(appReducers);

render(
	(
		<Provider store={store}>
			<Router history={browserHistory}>
				{routes}
			</Router>
		</Provider>
	),
	document.getElementById('app')
);
