import React, {Component} from 'react'


export default class Confirmation extends Component{

	render() {
		return (
			<div>
				<h2>Thank You! Your order has been placed!</h2>
				<p>Your order number is {this.props.cart.id}</p>
			</div>
		)
	}
}