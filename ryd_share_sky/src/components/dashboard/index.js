import React, { Component } from 'react'

import ProfilePic from "../../assets/img/profile.png";

import Sidebar from './Sidebar'
import History from './History'
import CarList from './CarList'
import Bank from './Bank'

class Dashboard extends Component {

	render() {
		const name = "Sidnee Gye";
		return (
			<div>
				<section className="hero is-small">
					<Sidebar />
					<div className="hero-body">
						<div className="container">
	                        <div className="columns is-centered">
								<div className="column is-2 is-offset-2">
	                                <figure className="image" style={{width: "200px", height: "200px"}}>
	                                    <img className="is-rounded img-glow" src={ProfilePic} alt=""/>
	                                </figure>
									<p className="title has-text-centered">
										{name}
									</p>
									<p className="subtitle has-text-centered">(Renter)</p>
								</div>
							</div>
							<div className="columns is-centered">
								<div className="column is-8 is-offset-2 notification is-dark">
									<p className="title">ID:
										<span className="has-text-danger" style={{paddingLeft: "20px"}}>38ca7b7c-7c60-4702-972a-930f211dbaf9</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				{
					localStorage.getItem('item') === 'history' ?
					<History />
					:
					(
						localStorage.getItem('item') === 'carList' ?
						<CarList />
						:
						(
							localStorage.getItem('item') === 'bank' ?
							<Bank />
							:
							<History />
						)
					)
				}
			</div>
		)
	}
}

export default Dashboard