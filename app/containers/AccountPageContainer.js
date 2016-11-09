'use strict';

import { connect } from 'react-redux';
import AccountPage from '../components/AccountPage'

import {fetchPastOrders} from 'APP/app/reducers/pastOrders'
import {fetchPastReviews} from 'APP/app/reducers/pastReviews'

const mapStateToProps = ({pastOrders, pastReviews}) => ({pastOrders, pastReviews}); 

const mapDispatchToProps = dispatch => ({
    getPastOrders(){
    	dispatch(fetchPastOrders());
    },
    getPastReviews(){
        dispatch(fetchPastReviews());
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage)