import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Scroll from 'react-scroll'

import Logo from '../../assets/img/logo.svg'

// Apollo
import { compose, graphql } from 'react-apollo'
import { SHOW_REGISTRATION, GET_REGISTRATION } from '../../graphql/landing'

class Navbar extends Component {
	render() {

        const { showRegistration } = this.props
        const ScrollLink = Scroll.Link

		return (
			<nav className="navbar is-primary is-transparent no-shadow" role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://cssninja.io">
                            <img src={Logo} alt="Project Logo" width="60" height="500" />
                            <h1 className="title">
                                Iterport
                            </h1>
                        </a>
                    </div>
            
                    <div id="navbar-menu" className="navbar-menu is-static">
            
                        <div className="navbar-end">
                            <ScrollLink 
                                to="features"
                                smooth={true}
                                offset={20}
                                duration={500} 
                                className="navbar-item"
                            >
                                Features
                            </ScrollLink>
                            <ScrollLink
                                to="pricing"
                                smooth={true}
                                offset={20}
                                duration={500} 
                                className="navbar-item"
                            >
                                Pricing
                            </ScrollLink>
                            <a 
                                className="navbar-item modal-trigger" 
                                data-modal="auth-modal"
                                onClick={e => {
                                    showRegistration({ variables: { showRegistration: true } })
                                    localStorage.setItem('x', false)
                                }}
                            >
                                Log in
                            </a>
                            <a 
                                className="navbar-item"
                                onClick={e => {
                                    showRegistration({ variables: { showRegistration: true } })
                                    localStorage.setItem('x', true)
                                }}
                            >
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