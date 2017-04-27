import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './components/App';
import NewFeedback from './components/NewFeedback';
import Success from './components/Success';

export default (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={NewFeedback} />
			<Route path="success/:id" component={Success} />
		</Route>
	</Router>
)