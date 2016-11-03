// ACTIONS

const GET_ITEMS = 'GET_ITEMS';






//-------------------------------------------------------------------------

//ACTION CREATORS

export const getItems = (items) => ({
	type: GET_ITEMS,
	items
})







//-------------------------------------------------------------------------

//ITEMS REDUCER

// this is an empty reducer so things don't break when we combineReducers

export function items(items = [], action) {
	console.log("ACTION: ", action)
	switch(action.type) {
		case 'GET_ITEMS':
			return action.items
		default:
			return items;
	}
}

//-------------------------------------------------------------------------

// DISPATCHERS

export const fetchItems = () => ((dispatch) => {
	console.log("dispatching items")
	fetch('/api/items')
    .then(res => res.json())
    .then(items => dispatch(getItems(items)));
})






