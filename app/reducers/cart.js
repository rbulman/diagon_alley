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
	fetch('/api/users')
    .then(res => res.json())
    .then(items => dispatch(getUsers(users)));
})
