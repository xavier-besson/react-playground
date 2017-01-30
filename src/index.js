import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import appReducers from 'reducers';
import routes from 'routes';

const store = createStore(appReducers, applyMiddleware(thunk));

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
