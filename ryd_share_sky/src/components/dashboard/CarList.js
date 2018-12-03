import React, { Component } from 'react'



class CarList extends Component {
	render() {
		return (
			<div>
				<div className="columns ">

                    <div className="column is-4">
                        <i className="fa fa-2x fa-car"></i>
                        <button className="button is-rounded is-medium" style={{marginRight: '12em'}}>

                            Open car
                        </button>
                        <button className="button is-rounded is-medium is-danger" style={{marginRight: '12em'}}>Close car
                        </button>
                    </div>
                    <div className="column is-3 ">
                        <i className="fa fa-2x fa-car"></i>
                        <div className="field">
                            <button className="button is-rounded is-medium" style={{marginRight: '12em'}}>
                                Open car
                            </button>
						</div>
                        <div className="field">
                            <button className="button is-rounded is-medium is-danger" style={{marginRight: '12em'}}>Close car
                            </button>
						</div>


					</div>
                    <div className="column is-3">
                        <i className="fa fa-2x fa-car"></i>
                        <div className="field">
                            <button className="button is-rounded is-medium" style={{marginRight: '12em'}}>

                                Open car
                            </button>
						</div>
                        <div className="field">
                            <button className="button is-rounded is-medium is-danger" style={{marginRight: '12em'}}>Close car
                            </button>
						</div>


					</div>
                    <div className="column is-3">
                        <i className="fa fa-2x fa-car"></i>
                        <div className="field">
                            <button className="button is-rounded is-medium" style={{marginRight: '12em'}}>Open car
                            </button>
						</div>
                        <div className="field">
                            <button className="button is-rounded is-medium is-danger" style={{marginRight: '12em'}}>Close car
                            </button>
						</div>

					</div>
					<div className="column is-offset-5">


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