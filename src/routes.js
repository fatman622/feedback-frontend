import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './components/App';
import NewFeedback from './components/NewFeedback';

export default (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={NewFeedback} />
		</Route>
	</Router>
)