import React, { Component } from 'react'



class CarList extends Component {
	render() {
		return (
			<div>
				<div className="columns">
					<div className="column is-offset-5">
						<button className="button is-rounded is-medium" style={{marginRight: '12em'}}>
							Open car
						</button>

						<button className="button is-rounded is-medium is-danger">
							Close car
						</button>
					</div>
				</div>
			</div>
		)
	}
}

export default CarList