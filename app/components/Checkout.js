import React, {Component} from 'react'
import {browserHistory} from 'react-router'

export default class Checkout extends Component{

	render(){
		// let {cart} = this.props;

		// let cart = {
		// 	subtotal: 100,
		// 	owl: "Common Barn Owl",
		// 	owlPrice: 15
		// }
		// let address = {
		// 	country: "US",
		// 	fullName: "Liz",
		// 	streetAddress: "5 Hanover Sq",
		// 	municipality: "New York",
		// 	state: "New York"
		// }

		console.log("Checkout", this.props)
		let {cart} = this.props;
		console.log(cart)

		let owlPrice = {
			US: 15,
			GB: 5,
			Canada: 10,
			default: 0
		}[cart.country? cart.country: "default"];
		console.log(owlPrice, "sickles")

		return (
			<div>
				<h1>CHECKOUT</h1>
				<h2>Order Summary</h2>
				<table>
					<thead>
					</thead>
					<tbody>
						<tr>
							<td>Item Subtotal: </td>
							<td>{cart.subtotal} sickles</td>
						</tr>
						<tr>
							<td>7% Tax: </td>
							<td>{parseInt(cart.subtotal * 0.07)} sickles</td>
						</tr>
						<tr>
							<td>Owl Delivery: </td>
							<td>{owlPrice} sickles</td>
						</tr>
						<tr>
							<td>Total: </td>
							<td>{cart.subtotal * 1.07 + owlPrice} sickles</td>
						</tr>
					</tbody>
				</table>
				<h2>Delivery {cart.owl? "By "+cart.owl+" to:": "declined"} </h2>
				<button className="btn" onClick={()=>browserHistory.push('/shipping')}>Edit Delivery</button>
				{
					cart.owl && cart.address.map((element, index) => (
						<p key={index}>{element}</p>
					))
				}
				<p>{cart.country}</p>
				<button className="btn" onClick={()=>this.props.confirmOrder(cart.id)}>Confirm Order</button>
				<button className="btn" onClick={() => browserHistory.push('/cart')}>Return to Cart</button>
			</div>
		)
	}
}

/*
<p>{cart.address.fullName}</p>
<p>{cart.address.streetAddress}</p>
<p>{cart.address.municipality}, {cart.address.state}</p>
<p>{cart.country}</p>
*/


/*
						<option>Snowy Owl (Canada and GB only)</option>
						<option>Barn Owl (US and GB only)</option>
						<option>Screech Owl (US and Canada only)</option>
						<option>Great Horned Owl (US and Canada only)</option>
						<option>Northern Pygmy Owl (US and Canada only)</option>
						<option>Northern Burrowing Owl (US and Canada only)</option>
*/
