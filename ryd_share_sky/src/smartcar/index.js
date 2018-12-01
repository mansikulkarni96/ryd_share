import React, { Component } from 'react'

class SmartcarProvider extends Component {
	render() {

		const smartcarClient = this.props.client;

		return (
			<button 
				onClick={e => {
					smartcarClient.openDialog();
				}}
			>
				Auth
			</button>
		)
	}
}

export default SmartcarProvider