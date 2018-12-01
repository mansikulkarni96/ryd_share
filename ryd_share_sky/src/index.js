import React from 'react';
import { render } from 'react-dom';

// Routes
import Routes from './routes'

// Styles
import './styles/css'


render(
	(
		<Routes />
	),
	document.querySelector('#root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();


