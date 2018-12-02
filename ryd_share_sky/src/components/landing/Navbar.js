import React, { Component } from 'react'

import Logo from '../../assets/img/logo.svg'

// Apollo
import { compose, graphql } from 'react-apollo'
import { SHOW_REGISTRATION, GET_REGISTRATION } from '../../graphql/landing'

class Navbar extends Component {
	render() {

        const { showRegistration } = this.props

		return (
			<nav className="navbar is-primary is-transparent no-shadow" role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://cssninja.io">
                            <img src={Logo} alt="Project Logo" width="500" height="500" />
                        </a>
                    </div>
            
                    <div id="navbar-menu" className="navbar-menu is-static">
            
                        <div className="navbar-end">
                            <a href="#" className="navbar-item">
                                Features
                            </a>
                            <a href="#" className="navbar-item">
                                Pricing
                            </a>
                            <a 
                                className="navbar-item modal-trigger" 
                                data-modal="auth-modal"
                                onClick={e => {
                                    showRegistration({ variables: { showRegistration: true } })
                                }}
                            >
                                Log in
                            </a>
                            <a className="navbar-item">
                                <span className="button signup-button rounded secondary-btn raised">
                                    Sign up
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
		)
	}
}

export default compose(
    graphql(SHOW_REGISTRATION, { name: 'showRegistration' }), 
    graphql(GET_REGISTRATION, { name: 'getRegistration' })
)(Navbar)