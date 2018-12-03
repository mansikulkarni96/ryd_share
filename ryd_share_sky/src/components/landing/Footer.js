import React, { Component } from 'react'

import Logo from '../../assets/img/logo.svg'

class Footer extends Component {
	render() {
		return (
			<footer className="footer footer-dark">
	            <div className="container">
	                <div className="columns">
	                    <div className="column">
	                        <div className="footer-logo">
	                            <img src={Logo} alt="footer-logo" />
	                        </div>
	                    </div>
	                    <div className="column">
	                        <div className="footer-column">
	                            <div className="footer-header">
	                                <h3>Product</h3>
	                            </div>
	                            <ul className="link-list">
	                                <li><a href="javascript:void(0)">Why choose our Product ?</a></li>
	                                <li><a href="javascript:void(0)">Compare features</a></li>
	                                <li><a href="javascript:void(0)">Our Roadmap</a></li>
	                                <li><a href="javascript:void(0)">Request features</a></li>
	                            </ul>
	                        </div>
	                    </div>
	                    <div className="column">
	                        <div className="footer-column">
	                            <div className="footer-header">
	                                <h3>Docs</h3>
	                            </div>
	                            <ul className="link-list">
	                                <li><a href="#">Get Started</a></li>
	                                <li><a href="#">User guides</a></li>
	                                <li><a href="#">Admin guide</a></li>
	                                <li><a href="#">Developers</a></li>
	                            </ul>
	                        </div>
	                    </div>
	                    <div className="column">
	                        <div className="footer-column">
	                            <div className="footer-header">
	                                <h3>Blogroll</h3>
	                            </div>
	                            <ul className="link-list">
	                                <li><a href="#">Latest News</a></li>
	                                <li><a href="#">Tech articles</a></li>
	                                <li><a href="#">Video Blog</a></li>
	                            </ul>
	                        </div>
	                    </div>
	                    <div className="column">
	                        <div className="footer-column">
	                            <div className="footer-header">
	                                <h3>Follow Us</h3>
	                                <nav className="level is-mobile">
	                                    <div className="level-left">
	                                        <a className="level-item" href="https://github.com/#">
	                                            <span className="icon"><i className="fab fa-github-square fa-lg"></i></span>
	                                        </a>
	                                        <a className="level-item" href="https://dribbble.com/#">
	                                            <span className="icon"><i className="fab fa-dribbble-square fa-lg"></i></span>
	                                        </a>
	                                        <a className="level-item" href="https://fb.com/#">
	                                            <span className="icon"><i className="fab fa-facebook-square fa-lg"></i></span>
	                                        </a>
	                                        <a className="level-item" href="https://twitter.com/#">
	                                            <span className="icon"><i className="fab fa-twitter-square fa-lg"></i></span>
	                                        </a>
	                                       <a className="level-item" href="https://bitbucket.org/#">
	                                            <span className="icon"><i className="fab fa-bitbucket fa-lg"></i></span>
	                                        </a>
	                                    </div>
	                                </nav>
	        
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </footer>
		)
	}
}

export default Footer