import { combineReducers } from 'redux'
import {items} from './items';
import {users} from './users';
import {selectedItem} from './selectedItem'
import auth from './auth'
import {orders} from './orders'
import {cartItems} from './cartItems'
import {pastOrders} from './pastOrders'
import {pastReviews} from './pastReviews'
import {cart} from './cart'
import {reviews} from './review'

const initialState = {};


const rootReducer = combineReducers({
	items, 
	selectedItem, 
	users, 
	auth, 
	cart, 
	cartItems, 
	orders, 
	pastOrders,
	pastReviews
});



export default rootReducer
