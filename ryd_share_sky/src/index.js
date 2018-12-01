import React from 'react';
import { render } from 'react-dom';

// Routes
import Routes from './routes'

// Smartcar
import SmartcarProvider from './smartcar' 
import smartcarClient from './smartcar/client'

// Styles
import './styles/bulma-cooked.css';
// import './styles/css'

render(
	(
		<SmartcarProvider client={smartcarClient}>
			<Routes />
		</SmartcarProvider>
	),
	document.querySelector('#root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();


