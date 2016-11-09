'use strict';

import { connect } from 'react-redux';
import AccountPage from '../components/AccountPage'

import {fetchPastOrders} from 'APP/app/reducers/pastOrders'
import {fetchPastReviews} from 'APP/app/reducers/pastReviews'
import {fetchItemById} from 'APP/app/reducers/items'


const mapStateToProps = ({pastOrders, pastReviews, auth}) => ({pastOrders, pastReviews, auth}); 


const mapDispatchToProps = dispatch => ({
    getPastOrders(){
    	dispatch(fetchPastOrders());
    },
    getPastReviews(){
        dispatch(fetchPastReviews());
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage)