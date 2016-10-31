import React, { Component } from 'react';
import {Link} from 'react-router'

export default class App extends Component{
	render(){
		return(
			<div>
			<div> 
				<ul> 
				<li><Link> HOMEPAGE </Link></li>
				<li><Link> About </Link></li>
				<li><Link> Login </Link></li>
				</ul>
			</div>
			{this.props.children}
			</div>
			
			)
	}
}

