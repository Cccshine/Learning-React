import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory,IndexRoute} from 'react-router';
import App from './component/App';
import Home from './component/Home';
import Repos from './component/Repos';
import About from './component/About';
import User from './component/User';
import Contacts from './component/Contacts';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}>
) 