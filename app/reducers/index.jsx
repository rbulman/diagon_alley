import { combineReducers } from 'redux'
import {items} from './items';
import {users} from './users';
import {selectedItem} from './selectedItem'
import auth from './auth'
import {cartItems} from './cartItems'


const initialState = {};

const rootReducer = combineReducers({items, selectedItem, users, auth, cartItems});

export default rootReducer
