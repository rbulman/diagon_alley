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
      {user ? <WhoAmI/> : <Login/>} 
    </div>
)

export default class App extends Component{
	render(){
		console.log("propsLogout: ", this.props.logout)
		return(
			<div>
			<div> 
				<ul> 
				<li><Link to="/"> Home </Link></li>
				<li><Link to="/items"> Shop </Link></li>
				<li><Link to="/about"> About </Link></li>
				<li><Link to="/login"> Login </Link></li>
				<li><button onClick={this.props.logout}> Logout </button></li>
				<li><ToggleButton /> </li>
				</ul>
			</div>
			
			{this.props.children}
			</div>
			
			)
	}
}

