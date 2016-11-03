// ACTIONS

const GET_USERS = "GET_USERS"





//-------------------------------------------------------------------------

//ACTION CREATORS


export const getUsers = (users) => ({
	type: GET_USERS,
	users
})




//-------------------------------------------------------------------------

//USERS REDUCER

// this is an empty reducer so things don't break when we combineReducers

export default function users(users = [], action) {
	switch(action.type) { 
		case GET_USERS:
			return action.users     
		default:
			return users;
	}
}


//-------------------------------------------------------------------------

// DISPATCHERS
