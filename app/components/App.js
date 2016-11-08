import React, { Component } from 'react';
import {Link} from 'react-router'
import WhoAmI from './WhoAmI'
import Login from './Login'
import {connect} from 'react-redux'


export const ToggleButton = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user }) =>
    <li>
      {user ? <WhoAmI/> : <Link to="/login"> LOGIN </Link>}
    </li>
)
const AdminButton = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user }) =>
    <li>
      {user && user.isAdmin ? <Link to="/admin">ADMIN</Link> : null}
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
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNav" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <div id="logo">
                   <h1 id="nav-brand"> W </h1>
                </div>
            </div>
            <div className="collapse navbar-collapse" id="myNav">
              <ul className="nav navbar-nav">
                <li><Link to="/"> HOME </Link></li>
                <li><Link to="/items"> SHOP </Link></li>
                <li><Link to="/about"> ABOUT </Link></li>
                <li><Link to="/cart"> CART </Link></li>
                <AdminButton />
              </ul>
              <ToggleButton />
            </div>
          </div>
        </nav>
  			<div className="container child-container">
      		{this.props.children}
  			</div>
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
