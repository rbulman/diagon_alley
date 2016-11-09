import axios from 'axios'

// ACTIONS


/* CART IS A PENDING ORDER!! 
 * Cart is the info in the Order Model
 * CartItems is the order-items join table + necessary items details
 */

/* 
 * cart = {
		user: some id,
		usertype: 'user' vs 'session'
		subtotal: $$$
		status: -----
		dateCompleted: -----
 	}
 */


const GET_CART = "GET_CART"
const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";


// const ADD_ADDRESS = "ADD_ADDRESS";
// const ADD_OWL = "ADD_OWL";
const ADD_DELIVERY = "ADD_DELIVERY";
const COMPLETE_ORDER = "COMPLETE_ORDER"
//-------------------------------------------------------------------------

//ACTION CREATORS


export const getCart = (cart) => ({
	type: GET_CART,
	cart
})

// export const addDelivery = ({address, owl, country}) => ({
// 	type: ADD_DELIVERY,
// 	address,
// 	owl,
// 	country
// })

/* delivery = {
		address,
		owl,
		country
	}
*/
export const addDelivery = (delivery) => ({
	type: ADD_DELIVERY,
	delivery
})

export const completeOrder = () => ({
	type: COMPLETE_ORDER
})
//-------------------------------------------------------------------------

//CART REDUCER

// this is an empty reducer so things don't break when we combineReducers


// let fakeCart = {
// 	id: -1,
// 	subtotal: 100,
// 	owl: null,
// 	country: null,
// 	address: []
// }

export function cart(cart = {}, action) {
	switch(action.type) { 
		case GET_CART:
			return action.cart
		case ADD_ITEM_TO_CART:
			let newCart = Object.assign({}, cart);
			let newSubTotal = cart.subtotal + action.item.price;
			newCart.subtotal = newSubTotal;
			return newCart;
		case ADD_DELIVERY:
			return Object.assign({}, cart, action.delivery)
		case COMPLETE_ORDER:
			return {id:cart.id}
		default:
			return cart;
	}
}


//-------------------------------------------------------------------------

// DISPATCHERS



export const updateDeliveryToServer = (id, delivery) => ((dispatch) => {
	console.log("updating delivery to server")
	
	dispatch(addDelivery(delivery))

	axios.put(`/api/orders/${id}`, delivery)
	.then(res => res.data)
})

export const updateCompleteStatusToServer = (id) => ((dispatch) => {
	console.log("order complete")

	axios.put(`/api/orders/${id}`, {status: 'complete'})
	.then(() => {
		console.log('complete order updated')
		dispatch(completeOrder())
	})
})

// copied from users, please change ASAP
export const fetchCart = () => ((dispatch) => {

	// console.log("dispatching users")
	// axios.get('/api/auth/whoami')
 //    .then(res => res.data)
 //    .then(user => {
 //    	return 
 	axios.get('/api/orders/user/pending')
    .then(res => res.data)
    .then(cart => {
    	dispatch(getCart(cart))
    })

})
