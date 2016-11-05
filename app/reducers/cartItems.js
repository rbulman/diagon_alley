// ACTIONS

/* CART IS A PENDING ORDER!!
 * Cart is the info in the Order Model
 * CartItems is the order-items join table + necessary items details
 */

const GET_CART_ITEMS = "GET_CART_ITEMS"
const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART"
const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART"


//-------------------------------------------------------------------------

//ACTION CREATORS

export const getCartItems = (cartItems) => ({
	type: GET_CART_ITEMS,
	cartItems
})

export const addItemToCart = (item) => ({
	type: ADD_ITEM_TO_CART,
	item
})

export const removeItemFromCart = (item) => ({
	type: REMOVE_ITEM_FROM_CART,
	item
})

//-------------------------------------------------------------------------

//CART REDUCER

// this is an empty reducer so things don't break when we combineReducers

export function cartItems(cartItems = [], action) {
	switch(action.type) { 
		case GET_CART_ITEMS:
			return action.cartItems

		case ADD_ITEM_TO_CART:
			return cartItems.concat([action.item]) 
			// need to figure out duplicate items

		case REMOVE_ITEM_FROM_CART:
			const index = cartItems.indexOf(action.item);
			// check how indexof checks equality
			return cartItems.slice(0,index).concat(cartItems.slice(index+1));
			// need to figure out how to deal with qty;

		default:
			return cartItems;
	}
}


//-------------------------------------------------------------------------

let fakeItems = [{
			name: "Extendable Ears",
			imageURL: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg",
			singlePrice: 7,
			qty: 3
		},{
			name: "Firebolt",
			imageURL: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg",
			singlePrice: 1000,
			qty: 1
		}];

// DISPATCHERS
export function fetchCartItems () {
	console.log("fetchCartItems")
	return (dispatch) => {
		// dispatches dummy data, comment out for access to backend
		return dispatch(getCartItems(fakeItems));
	
		console.log("fetching cart items")
		fetch() //NEED API ROUTE TO FETCH CART ITEMS
		.then(res => res.json())
		.then((cartItems) => {
			dispatch(getCartItems(cartItems))
		})
	}
}

// export const dispatchAddItem