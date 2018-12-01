import React, { Component } from 'react'

import Navbar from './Navbar'

class Hero extends Component {
	render() {
		return (
			<section className="hero is-fullheight is-default is-bold">
	            
	            <div className="hero-body">
	                <div className="container">
	                    <div className="columns is-vcentered">
	                        <div className="column is-5 is-offset-1 landing-caption">
	                            <h1 className="title is-1 is-bold is-spaced">
	                                Manage, Deploy.
	                            </h1>
	                            <h2 className="subtitle is-5 is-muted">Lorem ipsum sit dolor amet is a dummy text used by typography industry </h2>
	                            <p>
	                                <a className="button cta rounded primary-btn raised">
	                                    Get Started
	                                </a>
	                            </p>
	                        </div>
	                        <div className="column is-5 is-offset-1">
	                            <figure className="image is-4by3">
	                                <img src="assets/images/illustrations/worker.svg" alt="Description" />
	                            </figure>
	                        </div>
	        
	                    </div>
	                </div>
	            </div>
	        	<Navbar />
	            <div className="hero-foot mb-20">
	                <div className="container">
	                    <div className="tabs is-centered">
	                        <ul>
	                            <li><a><img className="partner-logo" src="assets/images/logos/clients/systek.svg" /></a></li>
	                            <li><a><img className="partner-logo" src="assets/images/logos/clients/tribe.svg" /></a></li>
	                            <li><a><img className="partner-logo" src="assets/images/logos/clients/kromo.svg" /></a></li>
	                            <li><a><img className="partner-logo" src="assets/images/logos/clients/infinite.svg" /></a></li>
	                            <li><a><img className="partner-logo" src="assets/images/logos/clients/gutwork.svg" /></a></li>
	                        </ul>
	                    </div>
	                </div>
	            </div>
	        </section>
		)
	}
}

export default Hero