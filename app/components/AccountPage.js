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
    this.props.getPastReviews()
  }


  render() {

    return (
      <div>
          <div>
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

          <div>
            <h1>YOUR PAST REVIEWS </h1>
              {this.props.pastReviews.map(function(review) {
                return (
                  <div key={review.id}>
                      <h3>Item ID: {review.item_id}</h3>
                      <h3>{review.stars}</h3>
                      <p>{review.content}</p>
                  </div>
                )
              })}
          </div>

        </div>
      )
  }
}
