import React, { Component } from 'react'

// Components
import Hero from './Hero'
import ValueProp from './ValueProp'
import SocialProof from './SocialProof'
import Login from './Login'
import Pricing from './Pricing'
import Footer from './Footer'

class Landing extends Component {
	render() {

		return (
			<div>    
		        <Hero />
		        <Login />
		        <ValueProp />
		        <SocialProof />
		        <Pricing />
		        <Footer />

		        <div id="backtotop">
		        	<a href="#"></a>
		        </div>        
			</div>
		)
	}
}

export default Landing