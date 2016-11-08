import React, {Component} from 'react'
import {browserHistory} from 'react-router'

export default class Shipping extends Component{

	constructor () {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
		this.declineDelivery = this.declineDelivery.bind(this);
	}

	onCountryChange() {

	}

	handleSubmit (e) {
		e.preventDefault();
		// console.log(e.target.country.value);
		let country = e.target.country.value;
		// let address = {
		// 	fullName: e.target.fullName.value,
		// 	streetAddress: e.target.streetAddress.value,
		// 	municipality: e.target.municipality.value,
		// 	state: e.target.state.value
		// }
		let address = [
			e.target.fullName.value,
			e.target.streetAddress.value,
			e.target.municipality.value,
			e.target.state.value
		]
		let owl = e.target.owl.value;
		console.log("adress", address);
		this.props.updateDelivery({owl, address, country});
		console.log(this.props.cart);
		browserHistory.push('/checkout')
	}

	declineDelivery () {
		this.props.updateDelivery({owl:null, address:[], country:null})
		browserHistory.push('/checkout');
	}

	render(){
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
		return (
			<div>
				<h1>OWL DELIVERY</h1>
				<button onClick={this.declineDelivery}>Decline Delivery</button>
				<p>Owl Delivery cost changes depending on country</p>
				<form onSubmit={this.handleSubmit}>
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
								<option value={element} key={index}>{element}</option>
							))
						}
					</select>
					<p>Depending on country, should change species of owl to use for delivery</p>
					<fieldset>
						<legend>Address</legend>
						<label>Full Name:</label><br/>
						<input type="text" name="fullName" /><br/>
						<label>Street Address: </label><br/>
						<input type="text" name="streetAddress"/><br/>
						<label>Municipality: </label><br/>
						<input type="text" name="municipality" /><br/>
						<label>State/Province: </label><br/>
						<input type="text" name="state" /><br/>
					</fieldset>
					<input type="submit"/>
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