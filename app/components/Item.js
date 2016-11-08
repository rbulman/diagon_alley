import React, { Component } from 'react';
import {Link} from "react-router";
import Review  from './Review';
import ReviewContainer from '../containers/ReviewContainer';

export default class Item extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    //load reviews here?
  }

  render() {
    console.log('this.props.selectedItem', this.props.selectedItem);
    return (
      <div>
        <h3 className="item-title">{this.props.selectedItem.name}</h3>
        <div className="row">
          <div className="col-sm-6 col-xs-12">
              <img src={this.props.selectedItem.itemURL} />
              <p>IMAGE</p>
          </div>
          <div className="col-sm-6 col-xs-12">
            <h4>{this.props.selectedItem.price} Sickles</h4>
            <p>{this.props.selectedItem.description} </p>
            <p>DESCRIPTION</p>
            <button> Add to cart </button>
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
