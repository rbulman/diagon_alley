import axios from 'axios'

// ACTIONS


/* CART IS A PENDING ORDER!! 
 * Cart is the info in the Order Model
 * CartItems is the order-items join table + necessary items details
 */

const GET_CART = "GET_CART"





//-------------------------------------------------------------------------

//ACTION CREATORS


export const getCart = (cart) => ({
	type: GET_CART,
	cart
})




//-------------------------------------------------------------------------

//CART REDUCER

// this is an empty reducer so things don't break when we combineReducers

export function cart(cart = {}, action) {
	switch(action.type) { 
		case GET_CART:
			return action.cart
		default:
			return cart;
	}
}


//-------------------------------------------------------------------------

// DISPATCHERS

// copied from users, please change ASAP
export const fetchCart = () => ((dispatch) => {
	console.log("dispatching users")
	axios.get('/api/auth/whoami')
    .then(res => res.data)
    .then(user => {
    	return axios.get(`/api/orders/${user.currentOrder}`)
    })
    .then(res => res.data)
    .then(cart => {
    	dispatch(getCart(cart))
    })
})
