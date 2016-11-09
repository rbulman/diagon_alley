import React from 'react'
import {browserHistory, Link} from 'react-router'

export const Login = ({ signup, login }) => (
  <div>
    <h1>SIGN UP</h1>
    <form onSubmit={evt => {
      evt.preventDefault()
      signup(evt.target.name.value, evt.target.username.value, evt.target.password.value)
      browserHistory.push('/')
    } }>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-sm-offset-3 col-xs-4" for="usn">E-Mail:</label>
        <div className="col-sm-4 col-xs-8">
          <input className="form-control" name="name" id="fullname" placeholder="Full Name"/>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-sm-offset-3 col-xs-4" for="psw">Password:</label>
        <div className="col-sm-4 col-xs-8">
          <input className="form-control" name="username" id="usn" placeholder="E-mail" />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-sm-offset-3 col-xs-4" for="psw">Password:</label>
        <div className="col-sm-4 col-xs-8">
          <input className="form-control" name="password" id="psw" type="password" placeholder="Password"/>
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-offset-4 col-sm-4 col-xs-offset-1 col-xs-10">
          <input className="btn btn-block" type="submit" value="Sign Up" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-offset-4 col-sm-4 col-xs-offset-1 col-xs-10">
          <button className="btn btn-block" onClick={() => {browserHistory.push('/login')}}>Already have an account?</button>
        </div>
      </div>
    </form>
  </div>
)

import {login, signup} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {signup, login},
) (Login)
