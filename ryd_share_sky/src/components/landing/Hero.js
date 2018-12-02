import React, { Component } from 'react'

import HeroImage from '../../assets/img/hero_image.svg'
import SmartCar from '../../assets/img/smartcar.svg'

// Components 
import Navbar from './Navbar'

class Hero extends Component {
	render() {
		return (
			<section className="hero is-fullheight is-primary is-bold">
	            
	            <Navbar />

	            <div className="hero-body">
	                <div className="container">
	                    <div className="columns is-vcentered">
                            <div className="column is-5 is-offset-1">
                                <figure className="image is-4by3">
                                    <img src={HeroImage} alt="Description" style={{transform: "scale(1.8)"}} />
                                </figure>
                            </div>
	                        <div className="column is-3 is-offset-1 landing-caption has-text-centered">
								


	                        </div>

	                    </div>
	                </div>
	            </div>

	            <div className="hero-foot mb-20">
	                <div className="container">
	                    <p className="title">Powered by
                            <img src={SmartCar} alt="" style={{margin: '0 1em'}} />
						</p>
	                </div>
	            </div>

	        </section>
		)
	}
}

export default Hero