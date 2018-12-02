import React, { Component } from 'react'

import HeroImage from '../../assets/img/hero_image.svg'
import SmartCar from '../../assets/img/smartcar.svg'

class Hero extends Component {
	render() {
		return (
			<section className="hero is-fullheight is-primary is-bold">
	            <nav className="navbar is-primary is-transparent no-shadow" role="navigation" aria-label="main navigation">
	                <div className="container">
	                    <div className="navbar-brand">
	                        <a className="navbar-item" href="https://cssninja.io">
	                            {/*<img src={HeroImage} alt="" width="112" height="28" />*/}
	                        </a>
	                        <a className="navbar-item is-hidden-desktop is-hidden-tablet" href="avascript:void(0)">
	                            <div id="menu-icon-wrapper" className="menu-icon-wrapper" style={{visibility: 'hidden'}}>
	                                <svg width="1000px" height="1000px">
	                                    <path className="path1" d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"></path>
	                                    <path className="path2" d="M 300 500 L 700 500"></path>
	                                    <path className="path3" d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"></path>
	                                </svg>
	                                <button id="menu-icon-trigger" className="menu-icon-trigger"/>
	                            </div>
	                        </a>
	            
	                        <a role="button" href="javascript:void(0)" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu">
	                            <span aria-hidden="true" />
	                            <span aria-hidden="true" />
	                            <span aria-hidden="true" />
	                        </a>
	                    </div>
	            
	                    <div id="navbar-menu" className="navbar-menu is-static">
	            
	                        <div className="navbar-start">
	                            <a className="navbar-item is-hidden-mobile">
	                                <div id="menu-icon-wrapper" className="menu-icon-wrapper" style={{visibility: 'visible'}}>
	                                    <svg width="1000px" height="1000px">
	                                        <path className="path1" d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"></path>
	                                        <path className="path2" d="M 300 500 L 700 500"></path>
	                                        <path className="path3" d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"></path>
	                                    </svg>
	                                    <button id="menu-icon-trigger" className="menu-icon-trigger"></button>
	                                </div>
	                            </a>
	                        </div>
	            
	                        <div className="navbar-end">
	                            <a href="#" className="navbar-item is-secondary">
	                                Features
	                            </a>
	                            <a href="#" className="navbar-item is-secondary">
	                                Pricing
	                            </a>
	                            <a href="#" className="navbar-item is-secondary modal-trigger" data-modal="auth-modal">
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

	            <div className="hero-body">
	                <div className="container">
	                    <div className="columns is-vcentered">
                            <div className="column is-5 is-offset-1">
                                <figure className="image is-4by3">
                                    <img src={HeroImage} alt="Description" style={{transform: "scale(1.8)"}} />
                                </figure>
                            </div>
	                        <div className="column is-3 is-offset-1 landing-caption">
								<div className="field">
                                    <div className="control">
                                        <input type="text" className="input is-rounded" placeholder="Username"/>
                                    </div>
								</div>
                                <div className="field">
                                    <div className="control"><input type="password" className="input is-rounded" placeholder="Password"/></div>
                                </div>

								<div className="columns is-centered" style={{"padding-top": "40px"}}>
									<div className="column is-5">
                                        <div className="field">
                                            <div className="control">
                                                <button className="button is-success is-outlined glow is-rounded is-medium">Log In</button>
                                            </div>
                                        </div>
									</div>
								</div>

								<p className="has-text-centered">Don't have an account yet?</p>
                                <div className="columns is-centered">
									<div className="column is-4">
                                        <a href="/" className="">Sign up</a>
									</div>
								</div>

	                        </div>

	                    </div>
	                </div>
	            </div>

	            <div className="hero-foot mb-20">
	                <div className="container">
	                    <p className="title">Powered by
                            <img src={SmartCar} alt=""/>
						</p>


	                </div>
	            </div>
	        </section>
		)
	}
}

export default Hero