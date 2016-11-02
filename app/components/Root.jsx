import React, { Component } from 'react';
import Item from './Item';
import ItemList from './ItemList';

export default class Root extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    
  }



  render() {

    return (

      <div>
          <ItemList />
      </div>
    )
  }
}
