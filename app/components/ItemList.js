import React, { Component } from 'react';
import Item from './Item';
import {connect} from 'react-redux';


export default class ItemList extends Component {
  constructor() {
    super();
    this.state = {items: []};
  }

  componentDidMount() {  //we will refactor this to action creators, etc. later
    fetch('/api/items')
    .then(res => res.json())
    .then(items => {
      this.setState({items});
    })
  }


  render() {

    return (
      <div>
          {this.state.items.map(function(item) {
            return (
              <Item item={item} key={item.id} />
            )
          })}
      </div>
    )
  }
}


//------------------Container---------------------------

const mapStateToProps = ({items}) => ({items}); 

const mapDispatchToProps = dispatch => {
    
}












