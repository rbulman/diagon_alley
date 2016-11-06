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
			<div>
			<nav className="navbar navbar-default">
      <div className="container">
      
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-2">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="#">Brand</Link>
        </div>
    
        
        <div className="collapse navbar-collapse" id="navbar-collapse-2">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/items">Shop</Link></li>
            <li><Link to="#">Works</Link></li>
			<AdminButton/> 
          </ul>
           { this.props.user ? this.renderLogout() : this.renderLoginSignup() }
          <div className="collapse nav navbar-nav nav-collapse slide-down" id="nav-collapse2">
            <form className="navbar-form navbar-right form-inline" role="form">
              <div className="form-group">
                <label className="sr-only" htmlFor="Email">Email</label>
                <input type="email" className="form-control" id="Email" placeholder="Email" autoFocus required />
              </div>
              <div className="form-group">
                <label className="sr-only" htmlFor="Password">Password</label>
                <input type="password" className="form-control" id="Password" placeholder="Password" required />
              </div>
              <button type="submit" className="btn btn-success">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
			
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
