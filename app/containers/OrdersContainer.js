'use strict';

import { connect } from 'react-redux';
import Orders from '../components/Orders'
import {fetchOrders} from 'APP/app/reducers/orders'
import {fetchSelectedOrder} from 'APP/app/reducers/orders'

const mapStateToProps = ({orders}) => ({orders}); 

const mapDispatchToProps = dispatch => ({
   getOrders(){
   		dispatch(fetchOrders())
   } 
})

export default connect(mapStateToProps, mapDispatchToProps)(Orders)