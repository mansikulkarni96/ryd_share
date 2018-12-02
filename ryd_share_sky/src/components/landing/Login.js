import React, { Component } from 'react'

// Apollo
import { compose, graphql } from 'react-apollo'
import { SHOW_REGISTRATION, GET_REGISTRATION } from '../../graphql/landing'

class Login extends Component {
	constructor() {
		super()
		this.state = {
			username: '', 
			password: ''
		}
	}

	render() {

		const { username, password } = this.state
		const { getRegistration, showRegistration } = this.props

		return (
			<div id="auth-modal" className={`modal ${getRegistration.showRegistration ? 'is-active':''}`}>
	            <div 
	            	className="modal-background" 
	            	onClick={e => {
	            		showRegistration({ variables: {showRegistration: false } })
	            	}}
	            />
	            <div className="modal-content">
	                <div className="flex-card auth-card">
	                    <div className="tabs-wrapper">
	                        <div className="tabs">
	                            <ul>
	                                <li className="is-active" data-tab="login-tab"><a href='/'>Login</a></li>
	                                <li data-tab="register-tab"><a href="javascript:void(0)">Signup</a></li>
	                            </ul>
	                        </div>
	                        <div id="login-tab" className="tab-content is-active">
	                            <div className="field">
	                                <label>Username</label>
	                                <div className="control">
	                                    <input 
	                                    	type="text" 
	                                    	className="input is-medium"
	                                    	onChange={e => this.setState({ username: e.target.value })} 
	                                    	placeholder="Enter username" 
	                                    />
	                                </div>
	                            </div>
	                            <div className="field">
	                                <label>Password</label>
	                                <div className="control">
	                                    <input 
	                                    	type="password" 
	                                    	className="input is-medium" 
	                                    	onChange={e => this.setState({ password: e.target.value })}
	                                    	placeholder="Enter password" 
	                                    />
	                                </div>
	                            </div>
	        					
	        					<div className="has-text-centered">
		                            <a className="button is-fullwidth secondary-btn is-rounded raised" href="javascript:void(0)">
		                            	Log in
		                            </a>
		                        </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	            <button 
	            	className="modal-close is-large" 
	            	aria-label="close"
	            	onClick={e => {
	            		showRegistration({ variables: { showRegistration: false }})
	            	}}
	            />
	        </div>
		)
	}
}

export default compose(
	graphql(SHOW_REGISTRATION, { name: 'showRegistration' }),
	graphql(GET_REGISTRATION, { name: 'getRegistration' })
)(Login)