import React, { Component } from 'react';
import {Link} from 'react-router'

export default class App extends Component{
	render(){
		return(
			<div>
			<div> 
				<ul> 
				<li><Link to="/"> Home </Link></li>
				<li><Link to="/items"> Shop </Link></li>
				<li><Link to="/about"> About </Link></li>
				<li><Link to="/login"> Login </Link></li>
				</ul>
			</div>
			
			{this.props.children}
			</div>
			
			)
	}
}

