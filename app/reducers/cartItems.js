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
		fetch('/api/orders/cartItems')
		.then(res => res.json())
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

	// orderItem relation
	return putItemInCartToServer(item)
	.then(() => dispatch(fetchCartItems()))
})

export const putItemInCartToServer = (item) => {
	console.log("putItemInCartToServer: ", item.id)
	axios.put(`/api/orders/addToCart/${item.id}`)
	.then(res => res.data)
	.then(res => {console.log("incremented")
	})
}


export const decrementItem = (item, order) => {
	console.log("decrement item: ", item.id)
	axios.put(`/api/orders/removeOne/${order.id}/${item.id}`)
	.then(res => res.data)
	.then(res => {console.log("decremented")
	})
}
