// ACTIONS

const GET_ORDERS = 'GET_ORDERS';


//-------------------------------------------------------------------------

//ACTION CREATORS

export const getItems = (orders) => ({
	type: GET_ORDERS,
	orders
})



//-------------------------------------------------------------------------

//ORDERS REDUCER

// this is an empty reducer so things don't break when we combineReducers

export function orders(orders = [], action) {
	console.log("ACTION: ", action)
	switch(action.type) {
		case 'GET_ORDERS':
			return action.orders
		default:
			return orders;
	}
}

//-------------------------------------------------------------------------

// DISPATCHERS

export const fetchItems = () => ((dispatch) => {
	console.log("dispatching items")
	fetch('/api/orders')
    .then(res => res.json())
    .then(orders => dispatch(getItems(orders)));
})






