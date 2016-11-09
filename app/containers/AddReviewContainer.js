'use strict';

import { connect } from 'react-redux';
import AddReview from '../components/AddReview';
import { selectedItem } from '../reducers/index';


const mapStateToProps = ({selectedItem, auth}) => ({selectedItem, user: auth}); 

// const mapDispatchToProps = dispatch => ({
//     getReviews() {
//         dispatch(fetchReviews(selectedItem));
//     }
// })

 
export default connect(mapStateToProps)(AddReview)