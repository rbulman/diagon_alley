import React, { Component } from 'react';
import {Link} from 'react-router';

export default class AccountPage extends Component {
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
    this.props.getPastOrders()
  }


  render() {

    return (
      <div>
        <h1>ACCOUNT INFORMATION </h1>
        <h5>Name: {this.props.auth.name} </h5>
        <h5>E-Mail: {this.props.auth.email} </h5>
        <h1>YOUR PAST ORDERS </h1>
          {this.props.pastOrders.map(function(order) {
            return (
              <div key={order.id}>
                <Link to={`/orders/${order.id}`}>
                  <h3>{order.dateCompleted}</h3>
                  <h3>{order.subtotal}</h3>
                </Link>
              </div>
            )
          })}
      </div>
    )
  }
}
