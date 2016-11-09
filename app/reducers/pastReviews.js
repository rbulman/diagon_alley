import axios from 'axios'

// ACTIONS

const GET_PAST_REVIEWS = 'GET_PAST_REVIEWS';

//-------------------------------------------------------------------------

//ACTION CREATORS

export const getPastReviews = (pastReviews) => ({
	type: GET_PAST_REVIEWS,
	pastReviews
})


//-------------------------------------------------------------------------

//ITEMS REDUCER

// this is an empty reducer so things don't break when we combineReducers

export function pastReviews(pastReviews = [], action) {
	console.log("ACTION: ", action)
	switch(action.type) {
		case 'GET_PAST_REVIEWS':
			return action.pastReviews
		default:
			return pastReviews;
	}
}

//-------------------------------------------------------------------------

// DISPATCHERS

export const fetchPastReviews = () => ((dispatch) => {
	console.log("dispatching pastReviews")
	axios.get('/api/auth/whoami')
	.then(res => res.data)
	.then(user => {
		return axios.get(`/api/reviews/byUser/${user.id}`)
	})
    .then(res => res.data)
    .then(pastReviews => dispatch(getPastReviews(pastReviews)));
})
