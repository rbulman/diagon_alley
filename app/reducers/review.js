// ACTIONS

const GET_REVIEWS = 'GET_REVIEWS';
const ADD_REVIEW = 'ADD_REVIEW';

//-------------------------------------------------------------------------

//ACTION CREATORS

export const getReviews = (reviews) => ({
	type: GET_REVIEWS,
	reviews
})

export const addReview = (review) => ({
	type: ADD_REVIEW,
	review
})

//-------------------------------------------------------------------------

//REVIEWS REDUCER


export function reviews(reviews = [], action) {
	switch(action.type) {
		case 'GET_REVIEWS':
			return action.reviews;
		case 'ADD_REVIEW':
			return action.review;
		default:
			return reviews;
	}
}

//-------------------------------------------------------------------------

// DISPATCHERS

export const fetchReviews = (selectedItem) => ((dispatch) => {
	fetch('/api/reviews/${selectedItem.id}')
    .then(res => res.json())
    .then(reviews => dispatch(getReviews(reviews)));
})






