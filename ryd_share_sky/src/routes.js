import React from 'react'
import { Route, Router, Switch, Redirect } from 'react-router-dom'
import createHistory from './history'

// Containers
import Landing from './containers/Landing'


const Routes = () => (
	<Router history={createHistory}>
		<Switch>
			<Route exact path="/" component={Landing} />
			<Route exact path="/*" render={props => {
				return <ErrorPage {...props} />
			}}/>
		</Switch>
	</Router>
)

export default Routes