import React, { Component } from 'react';

// Components
import personOne from '../../assets/img/1.png';
import personTwo from '../../assets/img/2.png';
import personThree from '../../assets/img/3.png';
import appMock from '../../assets/img/app-mockup.png';

// Apollo
import { compose, graphql } from 'react-apollo'
import { SHOW_REGISTRATION, GET_REGISTRATION } from '../../graphql/landing'

class SocialProof extends Component {
	render() {

		const { showRegistration } = this.props
		
		return (
			<div>
				<section className="section is-medium section-secondary">
		            <div className="container">
		        
		                <div className="title-wrapper has-text-centered">
		                    <h2 className="title is-2 light-text is-spaced">Our Clients love us !</h2>
		                    <h3 className="subtitle is-5 light-text">Our passion is to make their lives simpler.</h3>
		                </div>
		        
		                <div className="content-wrapper">
		                    <div className="columns is-vcentered">
		                        <div className="column is-4">
		                            <figure className="testimonial">
		                                <blockquote>
		                                    Lorem ipsum dolor sit amet, elit deleniti dissentias quo eu, hinc minim appetere te usu, ea case duis scribentur has. Duo te consequat elaboraret, has quando suavitate at.
		                                </blockquote>
		                                <div className="author">
		                                    <img src={personOne} alt=""/>
		                                    <h5>Irma Walters</h5><span>Roommate</span>
		                                </div>
		                            </figure>
		                        </div>
		                        <div className="column is-4">
		                            <figure className="testimonial">
		                                <blockquote>
		                                    Lorem ipsum dolor sit amet, elit deleniti dissentias quo eu, hinc minim appetere te usu, ea case duis scribentur has. Duo te consequat elaboraret, has quando suavitate at.
		                                </blockquote>
		                                <div className="author">
		                                    <img src={personTwo} alt=""/>
		                                    <h5>John Bradley</h5><span>Student</span>
		                                </div>
		                            </figure>
		                        </div>
		                        <div className="column is-4">
		                            <figure className="testimonial">
		                                <blockquote>
		                                    Lorem ipsum dolor sit amet, elit deleniti dissentias quo eu, hinc minim appetere te usu, ea case duis scribentur has. Duo te consequat elaboraret, has quando suavitate at.
		                                </blockquote>
		                                <div className="author">
		                                    <img src={personThree} alt=""/>
		                                    <h5>Gary Blackman</h5><span>Former metro rider</span>
		                                </div>
		                            </figure>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </section>

		        <section className="section section-feature-grey is-medium">
		            <div className="container">
		        
		                <div className="columns">
		                    <div className="column is-10 is-offset-1">
		                        <div className="has-text-centered">
									<figure className="image is-4by3" style={{position: 'static'}}>
                                        <img className="pushed-image" src={appMock} style={{borderRadius: "8px"}}/>
									</figure>
		                        </div>
		                    </div>
		                </div>
		        
		                <div className="title-wrapper has-text-centered">
		                    <h2 className="title is-2">One Platform</h2>
		                    <h3 className="subtitle is-5 is-muted">To rule them All</h3>
		                </div>
		        
		                <p className="has-text-centered mt-20">
		                    <a 
		                    	className="button cta is-large rounded secondary-btn raised"
		                    	onClick={e => {
						      		showRegistration({ variables: { showRegistration: true } })
						      	}}
		                    >
		                        Get Started
		                    </a>
		                </p>
		            </div>
		        </section>
		    </div>
		)
	}
}

export default compose(
	graphql(SHOW_REGISTRATION, { name: 'showRegistration' }), 
    graphql(GET_REGISTRATION, { name: 'getRegistration' })
)(SocialProof)