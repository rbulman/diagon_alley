import React from 'react'
import {browserHistory, Link} from 'react-router'

export const Login = ({ login }) => (<div>
  <form onSubmit={evt => {
    evt.preventDefault()
    login(evt.target.username.value, evt.target.password.value)
    browserHistory.push('/')
  } }>
    <input name="name" placeholder="Full name" />
    <input name="username" placeholder="E-mail"/>
    <input name="password" type="password" placeholder="password"/>
    <input type="submit" value="Sign Up" />
  </form>
  <div>
  Already have an account?
  <button onClick={() => {browserHistory.push('/login')}}> Login</button>
  </div>
  </div>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {login},
) (Login)
