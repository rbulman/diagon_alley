import axios from 'axios'

// ACTIONS

/* CART IS A PENDING ORDER!!
 * Cart is the info in the Order Model
 * CartItems is the order-items join table + necessary items details
 */


/* OrderItem = {
		order_id:
		item_id:
		quantity:
		item: {
			price:
			imageURL:
			name:
		}
 	}
 * cartItem = [OrderItem]
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

//CART  REDUCER

// this is an empty reducer so things don't break when we combineReducers

export function cartItems(cartItems = [], action) {
	let newCartItems = null;
	switch(action.type) { 
		case GET_CART_ITEMS:
			return action.cartItems

		case ADD_ITEM_TO_CART:
			newCartItems = cartItems.slice(0);
			let addedItem = false;
			newCartItems.forEach((element) => {
				if (addedItem) return;
				if (element.itemId === action.item.id) {
					element.quantity++;
					addedItem = true;
				}
			})
			if (!addedItem) newCartItems.push(action.item);
			return newCartItems;
			
			// return cartItems.concat([action.item]) 
			// need to figure out duplicate items

		case REMOVE_ITEM_FROM_CART:
			let removeIndex = -1;
			newCartItems = cartItems.map((element, index) => {
				if (element.itemId === action.item.id) removeIndex = index;
				return Object.assign({}, element);
			})

			if(newCartItems[index].quantity === 1) {
				newCartItems.splice(index,1);
			} else {
				newCartItems[index].quantity--;
			}

			return newCartItems;

			// const index = cartItems.indexOf(action.item);
			// // check how indexof checks equality
			// return cartItems.slice(0,index).concat(cartItems.slice(index+1));
			// // need to figure out how to deal with quantity;

		default:
			return cartItems;
	}
}


//-------------------------------------------------------------------------

let fakeItems = [{
			name: "Extendable Ears",
			imageURL: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg",
			singlePrice: 7,
			quantity: 3
		},{
			name: "Firebolt",
			imageURL: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg",
			singlePrice: 1000,
			quantity: 1
		}];

// DISPATCHERS
export const fetchCartItems = () => ((dispatch) => {
	console.log("fetchCartItems")
	
		// dispatches dummy data, comment out for access to backend
		//return dispatch(getCartItems(fakeItems));
		axios.get('/api/auth/whoami')
		.then(res => res.data)
		.then(user => {
			if (user) return axios.get(`api/orders/user/pending/${user.id}`);
		})
		 //NEED API ROUTE TO FETCH CART ITEMS
		.then(res => res.data)
		.then((cartItems) => {
			console.log("cartItems: ", cartItems)
			dispatch(getCartItems(cartItems))
		})
	})

/* FRONTEND STORE
 * item must show up in cart
 * cart subtotal must increase
 * 
 * BACKEND ORDER MODEL
 * orderItem relation
 * order.subtotal increase
 */

export const putItemInCart = (item) => ((dispatch) => {
	console.log("put item to cart");

	// item must show up in cart
	dispatch(addItemToCart(item));

	// orderItem relation
	putItemInCartToServer(item)
})

const putItemInCartToServer = (item) => {
	return axios.get('/api/auth/whoami')
	.then(res => res.data)
	.then(user => {
		if (user) return axios.put(`api/orders/addItem/${user.currentOrder}/${item.id}`);
	})
}