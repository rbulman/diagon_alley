import React, {Component} from 'react'

export default class Checkout extends Component{

	render(){
		// let {cart} = this.props;
		let cart = {
			subtotal: 100
		}
		console.log("Checkout", this.props)
		return (
			<div>
				<h1>CHECKOUT</h1>
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
							<td>Total: </td>
							<td>{cart.subtotal * 1.07} sickles</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}