import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Users extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    this.props.getUsers()
  }


  render() {

    return (
      <div>
      <div> Users </div>
          {this.props.users.map(function(user) {
            return (
              <div key={user.id}>
                <Link to={`/users/${user.id}`}>
                  <h3>{user.name}</h3>

                  <button className="btn"> Edit </button>
                  </Link>
              </div>

            )
          })}
      </div>
    )
  }
}
