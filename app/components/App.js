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
    <li>
      {user && user.isAdmin ? <Link to="/admin">Admin</Link> : null}
    </li>
)

export default class App extends Component{
	constructor(props){
		super(props)
		this.renderLoginSignup = this.renderLoginSignup.bind(this);
    	this.renderLogout = this.renderLogout.bind(this);
	}

	render(){
		console.log("propsLogout: ", this.props.logout)
		return(
			<div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Link className="text-center" to="/"><h1 id="logo-header">Weasley's Wizarding Wheezes</h1></Link>
          </div>
        </div>
        <div className="row">
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
    		</div>
    		{this.props.children}
			</div>

			)
	}

	renderLoginSignup(){
		return(
			<ul className="nav navbar-nav navbar-right">
			<li><Link to="/login" activeClassName="active"> Login </Link></li>
			</ul>
			)
	}

	renderLogout(){
		return (
      	<ul className="nav navbar-nav navbar-right">
        <WhoAmI/>
      	</ul>
    )

	}
}

// 			<nav className="navbar navbar-inverse" role="navigation">
//        			<ul className="nav navbar-nav">
// 				<li><Link to="/"> Home </Link></li>
// 				<li><Link to="/items"> Shop </Link></li>
// 				<li><Link to="/about"> About </Link></li>
// 				<li><AdminButton /> </li>
// 				<li><ToggleButton /> </li>
// 				</ul>
// 			</nav>




// <li>
//               <Link className="btn btn-default btn-outline btn-circle collapsed"  data-toggle="collapse" data-on="#nav-collapse2" aria-expanded="false" aria-controls="nav-collapse2">Sign in</Link>
//             </li>
