import React, {Component} from 'react'

export default class Cart extends Component{
	render(){

		let cartItems = [];
		return (
			<div> 
				<h1>CART</h1>
				{
					cartItems.map((singleItem, index) => ({
						<div key = index>
							
						</div>
					}))
				}
			</div>
			)
	}
}