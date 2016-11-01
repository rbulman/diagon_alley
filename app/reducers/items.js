// ACTIONS

const INITIALIZE_ITEMS = 'INITIALIZE_ITEMS';






//-------------------------------------------------------------------------

//ACTION CREATORS

const initializeItems = (items) => {
	type: INITIALIZE_ITEMS,
	items
}







//-------------------------------------------------------------------------

//ITEMS REDUCER

// this is an empty reducer so things don't break when we combineReducers

export default function itemsReducer(items = [], action) {
	switch(action.type) {
		default:
			return items;
	}
}

//-------------------------------------------------------------------------

// DISPATCHERS

const fetchItems = () => (dispatch) => {
	fetch('/api/items')
    .then(res => res.json())
    .then(items => dispatch(initializeItems(items)));
}






