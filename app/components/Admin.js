import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

const AdminDisplay = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children}) => (
    <div>

       <div>
          <ul>
          <li><Link to="/admin/orders"> Manage Orders </Link></li>
          <li><Link to="/admin/users"> Manage Users </Link></li>
          <li><Link to="/admin/items"> Manage Items </Link></li>
          </ul>
      </div>


      <div>
        {children}
      </div>

      </div>
))


export default class Admin extends Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {  //we will refactor this to action creators, etc. later
    // fetch('/api/items')
    // .then(res => res.json())
    // .then(items => {
    //   this.setState({items});
    // })
    //this.props.getItems()
  }


  render() {

    return (
      <div>
      {this.props.user && this.props.user.isAdmin ? <AdminDisplay children={this.props.children}/> : 
      <div>Please contact an administrator to gain access to this page</div> }
      </div>
    )
  }
}