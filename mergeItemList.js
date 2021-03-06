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
      <div className="item-container">
        <div className="row">
          <div className="jumbotron">
            <Link className="text-center" to="/"><h1 id="logo-header">Weasleys Wizard Wheezes</h1></Link>
          </div>
        </div>
        <h1>PRODUCTS</h1>
        <div className="row">
            {this.props.items.map(function(item) {
              return (
                <div key={item.id} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="shop-item">
                    <Link to={`/items/${item.id}`}>
                      <h3 className="item-title">{item.name}</h3>
                      <img className="img-responsive img-rounded item-image" alt={item.name} src={item.imageURL} />
                      <h4>{item.price} Sickles</h4>
                    </Link>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    )
  }
}
