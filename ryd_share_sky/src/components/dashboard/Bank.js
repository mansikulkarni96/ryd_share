import React, { Component } from 'react'

class Bank extends Component {
	render() {
		return (
			<div className="columns">
				<div className="column is-6 is-offset-4">
					<div className="box">
						<div className="column">
								<h1 className="subtitle has-text-centered">
									Billing
								</h1>
								<h1 className="title has-text-centered" style={{margin: '.4em 0'}}>
									$ 10
								</h1> 
						</div>	
						<hr />
						<div className="column is-6">
							You will be charged on Dec 19, 2018
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Bank