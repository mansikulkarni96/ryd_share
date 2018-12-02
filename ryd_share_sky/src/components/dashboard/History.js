import React, { Component } from 'react'

class History extends Component {
	render() {
		return (
			<section className="hero">
				<div className="hero-body">
					<div className="container">
						<div className="columns is-centered">
							<div className="column is-8 is-offset-6">
								<table className="table">
								  <thead>
								    <tr>
								      <th>Ride</th>
								      <th>Date</th>
								      <th>Destination</th>
								      <th>Passangers</th>
								      <th>Mile left</th>
								    </tr>
								  </thead>
								  <tbody>
								    <tr>
								      <th>1</th>
								      <th>12/02/18</th>
								      <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a>
								      </td>
								      <td>38</td>
								      <td>23</td>
								    </tr>
								  </tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default History