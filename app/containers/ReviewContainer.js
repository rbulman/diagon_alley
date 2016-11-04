'use strict';

import { connect } from 'react-redux';
import Review from '../components/Review';
import { fetchReviews } from '../reducers/review';


const mapStateToProps = ({reviews}) => ({reviews}); 

const mapDispatchToProps = dispatch => ({
    getReviews() {
        dispatch(fetchReviews());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Review)