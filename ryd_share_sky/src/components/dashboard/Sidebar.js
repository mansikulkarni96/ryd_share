import React, { Component } from 'react'

import Logo from '../../assets/img/logo.svg'

class Sidebar extends Component {
	constructor() {
		super()
		this.state = {
			tab: 'history'
		}
	}

	render() {

		const { tab } = this.state

		return (
			<div className="sidebar is-active">
	            <div className="sidebar-header">
	                <img src={Logo} alt="project logo" />
	                <strong><p className="is-size-4" style={{ color: 'white' }}>Iterport</p></strong>
	                <a className="sidebar-close" href="javascript:void(0);"><i data-feather="x"></i></a>
	            </div>
	            <div className="inner">
	                <ul className="sidebar-menu">
	                    <li>
	                    	<span className="nav-section-title" />
	                    </li>
	                    <li 
	                    	className={`${tab === 'history' ? 'is-dark-blue':''}`}
	                    	onClick={e => {
	                    		e.preventDefault()
	                    		this.setState({ tab: 'history' })
	                    		localStorage.setItem('item', 'history')
	                    	}}
	                    >
	                    	<a href="#">
	                    		<span className="fa fa-user fa-lg" />
	                    		History
	                    	</a>
	                    </li>
	                    <li 
	                    	className={`${tab === 'carList' ? 'is-dark-blue':''}`}
	                    	onClick={e => {
	                    		e.preventDefault()
	                    		this.setState({ tab: 'carList' })
	                    		localStorage.setItem('item', 'carList')
	                    	}}
	                    >
	                    	<a href="#">
	                    		<span className="fas fa-car-alt fa-lg" />
	                    		Car list
	                    	</a>
	                    </li>
	                    <li 
	                    	className={`${tab === 'bank' ? 'is-dark-blue':''}`}
	                    	onClick={e => {
	                    		e.preventDefault()
	                    		this.setState({ tab: 'bank' })
	                    		localStorage.setItem('item', 'bank')
	                    	}}
	                    >
	                    	<a href="#">
	                    		<span className="fas fa-piggy-bank fa-lg" />
	                    		Bank
	                    	</a>
	                    </li>
	                </ul>
	            </div>
	        </div>
		)
	}
}

export default Sidebar