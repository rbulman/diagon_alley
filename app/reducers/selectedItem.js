const GET_ITEM = 'GET_ITEM';






//-------------------------------------------------------------------------

//ACTION CREATORS

const getSelectedItem = (selectedItem) => ({
	type: GET_ITEM,
	selectedItem
})







//-------------------------------------------------------------------------

//ITEMS REDUCER

// this is an empty reducer so things don't break when we combineReducers

export function selectedItem(selectedItem = {}, action) {
	console.log("ACTION: ", action)
	switch(action.type) {
		case GET_ITEM:
			return action.selectedItem
		default:
			return selectedItem;
	}
}

//-------------------------------------------------------------------------

// DISPATCHERS

export const fetchSelectedItem = (itemId) => ((dispatch) => {
	console.log("dispatching single item")
	console.log("ITEM IN FETCH: ", itemId)
	
	fetch(`/api/items/${itemId}`)
    .then(res => res.json())
    .then(item => {
    	console.log("ITEM: ", item)
    	dispatch(getSelectedItem(item))

    });
})
