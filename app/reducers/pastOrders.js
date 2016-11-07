import axios from 'axios'

// ACTIONS

const GET_PAST_ORDERS = 'GET_PAST_ORDERS';






//-------------------------------------------------------------------------

//ACTION CREATORS

export const getPastOrders = (pastOrders) => ({
	type: GET_PAST_ORDERS,
	pastOrders
})


//-------------------------------------------------------------------------

//ITEMS REDUCER

// this is an empty reducer so things don't break when we combineReducers

export function pastOrders(pastOrders = [], action) {
	console.log("ACTION: ", action)
	switch(action.type) {
		case 'GET_ITEMS':
			return action.pastOrders
		default:
			return pastOrders;
	}
}

//-------------------------------------------------------------------------

// DISPATCHERS

export const fetchPastOrders = () => ((dispatch) => {
	console.log("dispatching pastOrders")
	axios.get('/api/auth/whoami')
	.then(res => res.data)
	.then(user => {
		return axios.get(`/api/orders/user/completed/${user.id}`)
	})
    .then(res => res.data)
    .then(pastOrders => dispatch(getPastOrders(pastOrders)));
})






