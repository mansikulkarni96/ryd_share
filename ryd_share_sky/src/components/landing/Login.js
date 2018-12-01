import React, { Component } from 'react'

class Login extends Component {
	render() {
		return (
			<div id="auth-modal" className="modal">
	            <div className="modal-background"></div>
	            <div className="modal-content">
	                <div className="flex-card auth-card">
	                    <div className="tabs-wrapper">
	                        <div className="tabs">
	                            <ul>
	                                <li className="is-active" data-tab="login-tab"><a href='/'>Login</a></li>
	                                <li data-tab="register-tab"><a href="javascript:void(0)">Register</a></li>
	                            </ul>
	                        </div>
	                        <div id="login-tab" className="tab-content is-active">
	                            <div className="field">
	                                <label>Username</label>
	                                <div className="control">
	                                    <input type="text" className="input is-medium" placeholder="Enter username" />
	                                </div>
	                            </div>
	                            <div className="field">
	                                <label>Password</label>
	                                <div className="control">
	                                    <input type="password" className="input is-medium" placeholder="Enter password" />
	                                </div>
	                            </div>
	        
	                            <a className="button is-fullwidth secondary-btn is-rounded raised" href="javascript:void(0)">Log in</a>
	                        </div>
	                    </div>
	                </div>
	            </div>
	            <button className="modal-close is-large" aria-label="close"></button>
	        </div>
		)
	}
}

export default Login