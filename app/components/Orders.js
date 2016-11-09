import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Orders extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount(){
    this.props.getOrders()
  }


  render() {

    return (
      <div>
      <h1> Orders </h1>
          {this.props.orders.map(function(order) {
            return (
              <div key={order.id}>
                <Link to={`/orders/${order.id}`}>
                  <h3>Order ID: {order.user_id}</h3>
                  <h5>Order Status: {order.status}</h5>
                  <button className="btn"> Edit </button>
                </Link>
              </div>
            )
          })}
      </div>
    )
  }
}
