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
      <div> Orders </div>
          {this.props.orders.map(function(order) {
            return (
              <div key={order.id}>
                <Link to={`/orders/${order.id}`}>
                  <h3>{order.status}</h3>
                  
                  <button> Edit </button>
                  </Link>
              </div>
            )
          })}
      </div>
    )
  }
}
