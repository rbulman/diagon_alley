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
      <div>

        <h3 className="">{this.props.selectedItem.name}</h3>
        <div className="row">
          <div className="col-sm-6 col-xs-12">
              <img className="img-responsive img-rounded item-image" src={this.props.selectedItem.imageURL} />

          </div>
          <div className="col-sm-6 col-xs-12">
            <h4>{this.props.selectedItem.price} Sickles</h4>
            <p>DESCRIPTION</p>
            <p>{this.props.selectedItem.description} </p>

            <button onClick={() => putItemInCartToServer(this.props.selectedItem)}> Add to cart </button>
          </div>
        </div>
        <div>
          {
            this.props.selectedItem.reviews &&
            this.props.selectedItem.reviews.map(function(review) {
            return(
              <Review review={review} />
            )
          })}
        </div>
      </div>
    )
  }
}
