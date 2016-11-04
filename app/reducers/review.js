// ACTIONS

const GET_REVIEWS = 'GET_REVIEWS';


//-------------------------------------------------------------------------

//ACTION CREATORS

export const getReviews = (reviews) => ({
	type: GET_REVIEWS,
	reviews
})


//-------------------------------------------------------------------------

//REVIEWS REDUCER


export function reviews(reviews = [], action) {
	switch(action.type) {
		case 'GET_REVIEWS':
			return action.reviews;
		default:
			return reviews;
	}
}

//-------------------------------------------------------------------------

// DISPATCHERS

export const fetchReviews = (user) => ((dispatch) => {
	fetch('/api/reviews/${user.id}')
    .then(res => res.json())
    .then(reviews => dispatch(getReviews(reviews)));
})






