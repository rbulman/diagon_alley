'use strict';

import { connect } from 'react-redux';
import Review from '../components/Review';
import { fetchReviews } from '../reducers/review';


const mapStateToProps = ({selectedItem}) => ({selectedItem}); 

const mapDispatchToProps = dispatch => ({
    getReviews() {
        dispatch(fetchReviews(selectedItem));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Review)