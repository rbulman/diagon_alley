import React from 'react'
import {Link} from 'react-router'

export const WhoAmI = ({ user, logout }) => (
  <ul className="nav navbar-nav">
    <li className="whoami">
       <Link className="whoami-user-name" to="/accountPage">{user && user.name}</Link>
    </li>
    <li>
      <button className="logout btn" onClick={logout}>Logout</button>
    </li>
  </ul>


)

import {logout} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  ({ auth }) => ({ user: auth }),
  {logout},
) (WhoAmI)

//this is what was in the return of WhoAmI

// <div className="whoami">
//     <span className="whoami-user-name">{user && user.name}</span>
//     <button className="logout" onClick={logout}>Logout</button>
//   </div>


// <ul className="nav navbar-nav navbar-right">
//   	<li className="whoami"> {user && "Hi, " + user.name + " "} </li>
//     <li><Link onClick={logout}>Logout</Link></li>
//   </ul>
