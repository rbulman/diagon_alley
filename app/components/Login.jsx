import React from 'react'
import {browserHistory, Link} from 'react-router'
import {fetchCartItems} from '../reducers/cartItems'

export const Login = ({ login, getCartItems }) => (
  <div>
    <h1>LOGIN</h1>
    <form onSubmit={evt => {
      evt.preventDefault()
      login(evt.target.username.value, evt.target.password.value)
      getCartItems()
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
    </form>
    <div>
      Don't have an account?
      <button onClick={() => {browserHistory.push('/signup')}}> Sign Up</button>
    </div>
  </div>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

const mapDispatchToProps = dispatch => (
  {
    getCartItems(){
      console.log("running get cart items from login")
      dispatch(fetchCartItems())
    },

    login

  });
export default connect (
  state => ({}),
  mapDispatchToProps, 
) (Login)
