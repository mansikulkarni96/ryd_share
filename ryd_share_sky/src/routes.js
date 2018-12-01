import React from 'react'
import { Route, Router, Switch, Redirect } from 'react-router-dom'
import createHistory from './history'

// Containers
import LandingPage from './containers/LandingPage'
import ErrorPage from './containers/ErrorPage'


const Routes = () => (
	<Router history={createHistory}>
		<Switch>
			<Route exact path="/" component={LandingPage} />
			<Route exact path="/*" render={props => {
				return <ErrorPage {...props} />
			}}/>
		</Switch>
	</Router>
)

export default Routes