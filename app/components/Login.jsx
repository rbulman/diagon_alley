import React from 'react'
import {browserHistory, Link} from 'react-router'

export const Login = ({ login }) => (
  <div>
    <h1>LOGIN</h1>
    <form onSubmit={evt => {
      evt.preventDefault()
      login(evt.target.username.value, evt.target.password.value)
      browserHistory.push('/')
    } }>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-sm-offset-3 col-xs-4" for="usn">E-Mail:</label>
        <div className="col-sm-4 col-xs-8">
          <input className="form-control" name="username" id="usn"/>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-sm-offset-3 col-xs-4" for="psw">Password:</label>
        <div className="col-sm-4 col-xs-8">
          <input className="form-control" name="password" id="psw" type="password" />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-offset-4 col-sm-4 col-xs-offset-1 col-xs-10">
          <input className="btn btn-block" type="submit" value="Login" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-offset-4 col-sm-4 col-xs-offset-1 col-xs-10">
          <button className="btn btn-block" onClick={() => {browserHistory.push('/signup')}}> Don't have an account?</button>
        </div>
      </div>
    </form>

  </div>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {login},
) (Login)
