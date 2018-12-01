import React, { Component } from 'react'

class Footer extends Component {
	render() {
		return (
			<footer className="footer footer-dark">
	            <div className="container">
	                <div className="columns">
	                    <div className="column">
	                        <div className="footer-logo">
	                            <img src="assets/images/logos/fresh-white-alt.svg" alt="footer-logo" />
	                        </div>
	                    </div>
	                    <div className="column">
	                        <div className="footer-column">
	                            <div className="footer-header">
	                                <h3>Product</h3>
	                            </div>
	                            <ul className="link-list">
	                                <li><a href="javascript:void(0)">Discover features</a></li>
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
	                                            <span className="icon"><i className="fa fa-github"></i></span>
	                                        </a>
	                                        <a className="level-item" href="https://dribbble.com/#">
	                                            <span className="icon"><i className="fa fa-dribbble"></i></span>
	                                        </a>
	                                        <a className="level-item" href="https://fb.com/#">
	                                            <span className="icon"><i className="fa fa-facebook"></i></span>
	                                        </a>
	                                        <a className="level-item" href="https://twitter.com/#">
	                                            <span className="icon"><i className="fa fa-twitter"></i></span>
	                                        </a>
	                                       <a className="level-item" href="https://bitbucket.org/#">
	                                            <span className="icon"><i className="fa fa-bitbucket"></i></span>
	                                        </a>
	                                    </div>
	                                </nav>
	        
	                                <a href="https://bulma.io" target="_blank">
	                                    <img src="assets/images/logos/made-with-bulma.png" alt="Made with Bulma" width="128" height="24" />
	                                </a>
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