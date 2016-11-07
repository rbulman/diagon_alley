import axios from 'axios'

// ACTIONS

const GET_ORDERS = 'GET_ORDERS';


//-------------------------------------------------------------------------

//ACTION CREATORS

export const getOrders = (orders) => ({
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

export const fetchOrders = () => ((dispatch) => {

	console.log("dispatching orders")
	axios('/api/orders')
    .then(res => res.data)
    .then(orders => dispatch(getOrders(orders)));

})






