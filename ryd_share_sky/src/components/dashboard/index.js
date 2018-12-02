import React, { Component } from 'react'
import ProfilePic from "../../assets/img/profile.png";
class Dashboard extends Component {

	constructor(props){
		super(props);
	}



	render() {
		const name = "Sidnee Gye";
		return (
			<section className="hero is-fullheight">
				<div className="hero-body">
					<div className="container">
                        <div className="columns is-centered">
							<div className="column is-2">
                                <figure className="image" style={{width: "200px", height: "200px"}}>
                                    <img className="is-rounded img-glow" src={ProfilePic} alt=""/>
                                </figure>
								<p className="title">{name}</p>
							</div>
						</div>
						<div className="columns is-centered">
							<div className="column is-8 notification is-dark">
								<p className="title">ID:
									<span className="has-text-danger" style={{paddingLeft: "20px"}}>38ca7b7c-7c60-4702-972a-930f211dbaf9</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Dashboard