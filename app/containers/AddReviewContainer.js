'use strict';

import { connect } from 'react-redux';
import AddReview from '../components/AddReview';
import { fetchReviews } from '../reducers/review';


const mapStateToProps = ({selectedItem}) => ({selectedItem}); 

const mapDispatchToProps = dispatch => ({
    getReviews() {
        dispatch(fetchReviews(selectedItem));
    }
})

 
export default connect(mapStateToProps, mapDispatchToProps)(AddReview)