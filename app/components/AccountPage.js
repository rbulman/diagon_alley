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
  }


  render() {

    return (
      <div>
          {this.props.pastOrders.map(function(item) {
            return (
              <div key={item.id}>
                <Link to={`/orders/${order.id}`}>
                  <h3></h3>
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
