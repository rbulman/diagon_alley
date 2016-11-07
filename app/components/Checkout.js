import React, {Component} from 'react'

export default class Checkout extends Component{

	constructor () {
		super();
		this.tempState = {};
	}

	onCountryChange() {

	}

	render(){
		// let {cart} = this.props;
		let cart = {
			subtotal: 100,
			owl: "Common Barn Owl",
			owlPrice: 15
		}
		let address = {
			country: "US",
			fullName: "Liz",
			streetAddress: "5 Hanover Sq",
			municipality: "New York",
			state: "New York"
		}
		console.log("Checkout", this.props)

		return (
			<div>
				<h1>CHECKOUT</h1>
				<h2>Order Summary</h2>
				<table>
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
							<td>{cart.owlPrice} sickles</td>
						</tr>
						<tr>
							<td>Total: </td>
							<td>{cart.subtotal * 1.07 + cart.owlPrice} sickles</td>
						</tr>
					</tbody>
				</table>
				<h2>Delivery By {cart.owl} to: </h2>
				<p>{address.fullName}</p>
				<p>{address.streetAddress}</p>
				<p>{address.municipality},{address.state}</p>
				<p>{address.country}</p>
				<button>Confirm Order</button>
			</div>
		)
	}
}



/*
						<option>Snowy Owl (Canada and GB only)</option>
						<option>Barn Owl (US and GB only)</option>
						<option>Screech Owl (US and Canada only)</option>
						<option>Great Horned Owl (US and Canada only)</option>
						<option>Northern Pygmy Owl (US and Canada only)</option>
						<option>Northern Burrowing Owl (US and Canada only)</option>
*/