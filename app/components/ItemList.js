import React, { Component } from 'react';
import Item from './Item';
import {Link} from 'react-router';





export default class ItemList extends Component {
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
    this.props.getItems()


  }


  render() {

    return (
      <div class="row">
          {this.props.items.map(function(item) {
            return (
              <div key={item.id} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <Link to={`/items/${item.id}`}>
                  <h3>{item.name}</h3>
                  <img src="http://vignette3.wikia.nocookie.net/harrypotter/images/d/d0/Harry_Potter's_wand.gif/revision/latest?cb=20090801185350" />
                  <h4>{item.price} Sickles</h4>
                  <p>{item.description}</p>
                </Link>
              </div>
            )
          })}
      </div>
    )
  }
}
