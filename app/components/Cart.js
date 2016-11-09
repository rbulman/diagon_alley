import React, {Component} from 'react'
import {Link, browserHistory} from 'react-router'
import {connect} from 'react-redux'

const CartDisplay = connect(
  ({ cartItems }) => ({ cartItems })
) (
  ({ cartItems, subtotal, cart}) => (
   <div>
				<h1>CART</h1>
				<table className="table">
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Item Price</th>
							<th>Qty</th>
							<th>Item Total</th>
							<th><button className="btn" onClick={() => browserHistory.push('/checkout')}>Checkout</button></th>
						</tr>
					</thead>
					<tbody>
						{
							cartItems.map((singleItem, index) => {
								subtotal += singleItem.item.price * singleItem.quantity
								return (
									<tr key = {index}>
										<td><img src={singleItem.item.imageURL} height="100" width="100"/></td>
										<td>{singleItem.item.name}</td>
										<td>{singleItem.item.price}</td>
										<td>
											{singleItem.quantity}
											<button className="btn">+</button>
											<button className="btn">-</button>
										</td>
										<td>{singleItem.item.price * singleItem.quantity}</td>
										<td><button className="btn">Remove</button></td>
									</tr>
								)
							})
						}
						<tr>
							<td/>
							<td/>
							<td/>
							<td>TOTAL:</td><td>{subtotal}</td>
							<td><button className="btn">Checkout</button></td>
						</tr>
					</tbody>
				</table>
			</div>
))

export default class Cart extends Component{
  constructor(props){
    super(props)
    this.renderNoCart = this.renderNoCart.bind(this)
  }

	componentDidMount(){
		this.props.getCartItems()
		//this.props.getCart()
	}

	render(){
		let {cartItems, cart} = this.props
		let subtotal = 0;

		console.log("this.props", this.props)
		console.log("first item in cart", cartItems[0])

		return (
			<div>
				{this.props.cartItems && this.props.cartItems.length ?
				<CartDisplay cartItems={this.props.cartItems} cart={cart} subtotal={subtotal}/> : this.renderNoCart()}
			</div>
		)
	}

  renderNoCart(){
    return (
      <div className="row">
        <div className="col-xs-1 col-sm-2 col-md-3"></div>
        <div className="col-xs-10 col-sm-8 col-md-6 banner-text">
          <h2 id="hmm">Hmm... </h2>
          <h3 id="looks">Looks like your cart is</h3>
          <h1 id="empty">empty.</h1>
          <h3 id="whynot">Why not</h3>
          <Link to="/items"><h1 id="treat">Treat Yourself?</h1></Link>
        </div>
      </div>
    )
  }

}
