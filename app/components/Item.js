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
      <div id = {this.props.selectedItem.id}>
        
          <h3>{this.props.selectedItem.name}</h3>
          <img src="http://vignette3.wikia.nocookie.net/harrypotter/images/d/d0/Harry_Potter's_wand.gif/revision/latest?cb=20090801185350" />
          <h4>{this.props.selectedItem.price} Sickles</h4>
          <p>{this.props.selectedItem.description}</p>
          <button> Add to cart </button>
          <div>
              {
                this.props.selectedItem.reviews &&
                this.props.selectedItem.reviews.map(function(review) {
                return(
                  <Review review={review} id={review.id} />
                )
              })}
              <Link to="/addReview"> Add a review </Link>
          </div>
        
      </div>
    )
  }
}
