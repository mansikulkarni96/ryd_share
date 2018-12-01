import React, { Component } from 'react'

// Components
import Navbar from './Navbar'
import Hero from './Hero'
import ValueProp from './ValueProp'
import SocialProof from './SocialProof'
import Contact from './Contact'
import Login from './Login'
import Footer from './Footer'

class Landing extends Component {
	render() {

		return (
			<div>    
		        <Navbar />
		        <Hero />
		        <ValueProp />
		        <SocialProof />
		        <Contact />
		        <Login />
		        <Footer />

		        <div id="backtotop">
		        	<a href="#"></a>
		        </div>        
			</div>
		)
	}
}

export default Landing