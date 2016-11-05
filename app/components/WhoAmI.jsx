import React from 'react'

export const WhoAmI = ({ user, logout }) => (
  <li className="whoami">
    <span className="whoami-user-name">{user && user.name}</span>
    <button className="navbar-btn btn btn-default" onClick={logout}>Logout</button>
  </li>
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