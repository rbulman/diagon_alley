import React, { Component } from 'react';
import {Link} from "react-router";

export default class Item extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    
  }



  render() {

    return (
      <div>
        
          <h3>{this.props.selectedItem.name}</h3>
          <img src="http://vignette3.wikia.nocookie.net/harrypotter/images/d/d0/Harry_Potter's_wand.gif/revision/latest?cb=20090801185350" />
          <h4>{this.props.selectedItem.price} Sickles</h4>
          <p>{this.props.selectedItem.description}</p>
          <button> Add to cart </button>
       
      </div>
    )
  }
}