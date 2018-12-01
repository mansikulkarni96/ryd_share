import React, { Component } from 'react'

class Sidebar extends Component {
	render() {
		return (
			<div className="sidebar">
	            <div className="sidebar-header">
	                <img src="assets/images/logos/fresh-square.svg" />
	                <a className="sidebar-close" href="javascript:void(0);"><i data-feather="x"></i></a>
	            </div>
	            <div className="inner">
	                <ul className="sidebar-menu">
	                    <li><span className="nav-section-title"></span></li>
	                    <li className="have-children"><a href="#"><span className="fa fa-user"></span>User</a>
	                        <ul>
	                            <li><a href="#">Profile</a></li>
	                            <li><a href="#">Account</a></li>
	                            <li><a href="#">Settings</a></li>
	                        </ul>
	                    </li>
	                    <li className="have-children"><a href="#"><span className="fa fa-envelope"></span>Messages</a>
	                        <ul>
	                            <li><a href="#">Inbox</a></li>
	                            <li><a href="#">Compose</a></li>
	                        </ul>
	                    </li>
	                    <li className="have-children"><a href="#"><span className="fa fa-image"></span>Images</a>
	                        <ul>
	                            <li><a href="#">Library</a></li>
	                            <li><a href="#">Upload</a></li>
	                        </ul>
	                    </li>
	                    <li className="have-children"><a href="#"><span className="fa fa-cog"></span>Settings</a>
	                        <ul>
	                            <li><a href="#">User settings</a></li>
	                            <li><a href="#">App settings</a></li>
	                        </ul>
	                    </li>
	                </ul>
	            </div>
	        </div>
		)
	}
}

export default Sidebar