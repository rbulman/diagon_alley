import React, {Component} from 'react'

export default class Cart extends Component{

	render(){
	
		let {cartItems} = this.props;
		// let cartItems = [{
		// 	name: "Extendable Ears",
		// 	imageURL: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg",
		// 	singlePrice: 7,
		// 	qty: 3
		// },{
		// 	name: "Firebolt",
		// 	imageURL: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg",
		// 	singlePrice: 1000,
		// 	qty: 1
		// }];
		/* expecting item to be:
		{
			name: string
			imageURL: url
			singlePrice: integer
			qty: integer
		}
		 */
		
		let subtotal = 0;

		console.log("this.props", this.props)
		console.log("cartItems", cartItems)

		return (
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
							<th><button>Checkout</button></th>
						</tr>
					</thead>
					<tbody>
						{
							cartItems.map((singleItem, index) => {
								subtotal += singleItem.singlePrice * singleItem.qty
								return (
									<tr key = {index}>
										<td><img src={singleItem.imageURL} height="100" width="100"/></td>
										<td>{singleItem.name}</td>
										<td>{singleItem.singlePrice}</td>
										<td>
											{singleItem.qty}
											<button>+</button>
											<button>-</button>
										</td>
										<td>{singleItem.singlePrice * singleItem.qty}</td>
										<td><button>Remove</button></td>
									</tr>
								)
							})
						}
						<tr>
							<td/>
							<td/>
							<td/>
							<td>TOTAL:</td><td>{subtotal}</td>
							<td><button>Checkout</button></td>
						</tr>
					</tbody>
				</table>
			</div>
			)
	}
}