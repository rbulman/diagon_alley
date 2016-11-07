import { combineReducers } from 'redux'
import {items} from './items';
import {users} from './users';
import {selectedItem} from './selectedItem'
import auth from './auth'
import {orders} from './orders'
import {cartItems} from './cartItems'
import {pastOrders} from './pastOrders'
import {cart} from './cart'


const initialState = {};

const rootReducer = combineReducers({items, selectedItem, users, auth, cart, cartItems, orders, pastOrders});


export default rootReducer
