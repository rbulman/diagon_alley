import { combineReducers } from 'redux'
import {items} from './items';
import {users} from './users';
import {selectedItem} from './selectedItem'
import auth from './auth'
import {cartItems} from './cartItems'
import {orders} from './orders'
import {cart} from './cart'

const initialState = {};

const rootReducer = combineReducers({items, selectedItem, users, auth, cart, cartItems, orders});

export default rootReducer
