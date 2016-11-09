import React, { Component } from 'react';
import {Link} from "react-router";
import Review  from './Review';
import ReviewContainer from '../containers/ReviewContainer';
import {putItemInCartToServer} from 'APP/app/reducers/cartItems'

import store from 'APP/app/store'

export default class Item extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    //load reviews here?
  }

  render() {
    return (

      <div className="item-container">
      <h3>{this.props.selectedItem.name}</h3>
        <div className="row">
          <div className="col-sm-6 col-xs-12">
              <img className="img-responsive img-rounded item-image" src={this.props.selectedItem.imageURL} />
          </div>
          <div className="col-sm-6 col-xs-12">
            <h2 className="banner-text">{this.props.selectedItem.name}</h2>
            <h4 className="item-price">{this.props.selectedItem.price} Sickles</h4>
            <p>DESCRIPTION</p>
            <p className="item-description">{this.props.selectedItem.description} </p>
            <button className="btn" onClick={() => putItemInCartToServer(this.props.selectedItem)}> Add to cart </button>
          </div>
        </div>
        <div>
          <h2 className="banner-text">Reviews</h2>
          {
            this.props.selectedItem.reviews &&
            this.props.selectedItem.reviews.map(function(review) {
            return(
              <Review review={review} id={review.id}/>
            )
          })}
          <div>
            <Link to="/addReview"> Add a review </Link>
          </div>
        </div>
      </div>
    )
  }
}
