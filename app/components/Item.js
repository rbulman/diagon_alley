import React, { Component } from 'react';

export default class Item extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }



  render() {

    return (
      <div>
          <h3>{this.props.item.name}</h3>
          <img src="http://vignette3.wikia.nocookie.net/harrypotter/images/d/d0/Harry_Potter's_wand.gif/revision/latest?cb=20090801185350" />
          <h4>{this.props.item.price} Sickles</h4>
          <p>{this.props.item.description}</p>
          <button> Add to cart </button> 
      </div>
    )
  }
}