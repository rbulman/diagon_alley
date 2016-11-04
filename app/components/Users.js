import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Users extends Component {
  constructor(props) {
    super(props);
    
  }


  render() {

    return (
      <div>
      <div> Users </div>
          {this.props.users.map(function(item) {
            return (
              <div key={user.id}>
                <Link to={`/users/${user.id}`}>
                  <h3>{user.name}</h3>
                  
                  <button> Edit </button>
                  </Link>
              </div>

            )
          })}
      </div>
    )
  }
}
