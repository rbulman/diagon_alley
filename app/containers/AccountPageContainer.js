'use strict';

import { connect } from 'react-redux';
import AccountPage from '../components/AccountPage'

import {fetchPastOrders} from 'APP/app/reducers/pastOrders'

const mapStateToProps = ({pastOrders}) => ({pastOrders}); 

const mapDispatchToProps = dispatch => ({
    getPastOrders(){
    	dispatch(fetchPastOrders());
    },

})

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage)