import React, { Component } from 'react';
import {Link} from 'react-router'
import WhoAmI from './WhoAmI'
import Login from './Login'
import {connect} from 'react-redux'

export const ToggleButton = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user }) =>
    <div>
      {user ? <Link><WhoAmI/></Link> : <Link to="/login"> Login </Link>} 
    </div>
)
const AdminButton = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user }) =>
    <div>
      {user && user.isAdmin ? <Link to="/admin">Admin</Link> : null} 
    </div>
)

export default class App extends Component{
	render(){
		console.log("propsLogout: ", this.props.logout)
		return(
			<div>
			<nav className="navbar navbar-inverse" role="navigation">
       			<ul className="nav navbar-nav">
				<li><Link to="/"> Home </Link></li>
				<li><Link to="/items"> Shop </Link></li>
				<li><Link to="/about"> About </Link></li>
				<li><Link to="/cart"> Cart </Link></li>
				<li><ToggleButton /> </li>
				<li><AdminButton /> </li>
				</ul>
			</nav>
			
			{this.props.children}
			</div>
			
			)
	}
}

