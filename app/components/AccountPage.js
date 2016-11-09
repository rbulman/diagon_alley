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

        <h1>ACCOUNT INFORMATION </h1>
        <h5>Name: {this.props.auth.name} </h5>
        <h5>E-Mail: {this.props.auth.email} </h5>
        <h1>YOUR PAST ORDERS </h1>
            <div>
              {this.props.pastOrders.length?  <div></div> : <div>(No past orders)</div> }
            </div>
              {this.props.pastOrders.map(function(order) {
                return (
                  <div key={order.id}>
                    <Link to={`/orders/${order.id}`}>
                      <h3>Date completed: {order.dateCompleted}</h3>
                      <h3>Subtotal: {order.subtotal} sickles</h3>
                    </Link>
                  </div>
                )
              })}
      

      
            <h1>YOUR PAST REVIEWS </h1>
              {this.props.pastReviews.map(function(review) {
                return (
                  <div key={review.id}>
                      <Link to={`items/${review.item_id}`}><strong>Item ID: {review.item_id}</strong></Link>
                      <p>Star Rating: {review.stars}</p>
                      <p>Your Review: {review.content}</p>
                  </div>
                )
              })}
      </div>
    )


  
  }
}
