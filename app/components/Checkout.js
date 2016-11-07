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
			subtotal: 100
		}
		let owls = {
			US: [
				"Common Barn Owl",
				"Screech Owl",
				"Great Horned Owl",
				"Northern Pygmy Owl",
				"Northern Burrowing Owl"
			],
			Canada: [
				"Snowy Owl",
				"Screech Owl",
				"Great Horned Owl",
				"Northern Pygmy Owl",
				"Northern Burrowing Owl"
			],
			GB: [
				"Snowy Owl",
				"Common Barn Owl",
			]
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
							<td>Total: </td>
							<td>{cart.subtotal * 1.07} sickles</td>
						</tr>
					</tbody>
				</table>
				<h2>Owl Delivery</h2>
				<form>
					<label>Choose your country: </label>
					<select name="country">
						<option value="US">United States</option>
						<option value="Canada">Canada</option>
						<option value="GB">Great Britain</option>
					</select><br/>
					<label>Choose your owl: </label>
					<select name="owl">
						{
							owls.US.map((element, index) => (
								<option value={index} key={index}>{element}</option>
							))
						}
					</select>
					<p>Depending on country, change species of owl to use for delivery</p>
					<fieldset>
						<legend>Address</legend>
						<label>Street Address: </label>
						<input type="text" name="street-address"/><br/>
						<label>Municipality: </label>
						<input type="text" name="municipality" /><br/>
						<label>State/Province: </label>
						<input type="text" name="state" /><br/>
						<input type="submit"/>
					</fieldset>
				</form>
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