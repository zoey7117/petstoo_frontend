import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
ReactDOM.render(
	<Router>
		<ScrollToTop>
			<Route path="/" component={App} />
		</ScrollToTop>
	</Router>,
	document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));
