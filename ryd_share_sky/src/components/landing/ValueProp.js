import React, { Component } from 'react'

class ValueProp extends Component {
	render() {
		return (
			<div>
				<section id="features" className="section section-feature-grey is-medium">
		            <div className="container">
		                <div className="title-wrapper has-text-centered">
		                    <h2 className="title is-2">Great Power Comes </h2>
		                    <h3 className="subtitle is-5 is-muted">With great Responsability</h3>
		                    <div className="divider is-centered"></div>
		                </div>
		        
		                <div className="content-wrapper">
		                    <div className="columns">
		                        <div className="column is-one-third">
		                            <div className="feature-card is-bordered has-text-centered revealOnScroll delay-1" data-animation="fadeInLeft">
		                                <div className="card-title">
		                                    <h4>Ride on demand</h4>
		                                </div>
		                                <div className="card-icon" style={{margin: "2.5em 0"}}>
		                                    <i className="fas fa-car fa-4x"></i>
		                                </div>
		                                <div className="card-text">
		                                    <p>This is some explanatory text that is on two rows</p>
		                                </div>
		                                <div className="card-action">
		                                    <a href="#" className="button btn-align-md accent-btn raised">Free Trial</a>
		                                </div>
		                            </div>
		                        </div>
		                        <div className="column">
		                            <div className="feature-card is-bordered has-text-centered revealOnScroll delay-2" data-animation="fadeInLeft">
		                                <div className="card-title">
		                                    <h4>Improve carbon footprint</h4>
		                                </div>
		                                <div className="card-icon" style={{margin: "2.5em 0"}}>
		                                    <i className="fas fa-leaf fa-4x"></i>
		                                </div>
		                                <div className="card-text">
		                                    <p>This is some explanatory text that is on two rows</p>
		                                </div>
		                                <div className="card-action">
		                                    <a href="#" className="button btn-align-md secondary-btn raised">Get Started</a>
		                                </div>
		                            </div>
		                        </div>
		                        <div className="column">
		                            <div className="feature-card is-bordered has-text-centered revealOnScroll delay-3" data-animation="fadeInLeft">
		                                <div className="card-title">
		                                    <h4>Lower the cost</h4>
		                                </div>
		                                <div className="card-icon" style={{margin: "2.5em 0"}}>
		                                    <i className="fas fa-hand-holding-usd fa-4x"></i>
		                                </div>
		                                <div className="card-text">
		                                    <p>This is some explanatory text that is on two rows</p>
		                                </div>
		                                <div className="card-action">
		                                    <a href="#" className="button btn-align-md primary-btn raised">Get Started</a>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </section>

		        <section className="section is-medium">
		            <div className="container">
		                <div className="columns">
		                    <div className="column is-centered-tablet-portrait">
		                        <h1 className="title section-title">You're here because you want the best</h1>
		                        <h3 className="subtitle is-4 is-muted">And we Know it</h3>
		                        <div className="divider"></div>
                                <h3 className="subtitle is-4 is-muted">Here's how it works</h3>
		                    </div>
		                    <div className="column is-8 mt-60">
		        

		                        <article className="media icon-box">
		                            <figure className="media-left">
		                                <p className="image">
		                                    <img src="assets/images/illustrations/icons/laptop-globe.svg" alt="laptop-globe" />
		                                </p>
		                            </figure>
		                            <div className="media-content mt-50">
		                                <div className="content">
		                                    <p>
		                                        <span className="icon-box-title">Powerful and unified interface</span>
		                                        <span className="icon-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor.</span>
		                                    </p>
		                                </div>
		                            </div>
		                        </article>

		                        <article className="media icon-box">
		                            <figure className="media-left">
		                                <p className="image">
		                                    <img src="assets/images/illustrations/icons/doc-sync.svg" alt="doc-sync" />
		                                </p>
		                            </figure>
		                            <div className="media-content mt-50">
		                                <div className="content">
		                                    <p>
		                                        <span className="icon-box-title">Cross device Synchronisation</span>
		                                        <span className="icon-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor.</span>
		                                    </p>
		                                </div>
		                            </div>
		                        </article>

		                        <article className="media icon-box">
		                            <figure className="media-left">
		                                <p className="image">
		                                    <img src="assets/images/illustrations/icons/mobile-feed.svg" alt="mobile-feed" />
		                                </p>
		                            </figure>
		                            <div className="media-content mt-50">
		                                <div className="content">
		                                    <p>
		                                        <span className="icon-box-title">Nomad System</span>
		                                        <span className="icon-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor.</span>
		                                    </p>
		                                </div>
		                            </div>
		                        </article>
		        
		                    </div>
		                </div>
		            </div>
		        </section>
		    </div>
		)
	}
}

export default ValueProp