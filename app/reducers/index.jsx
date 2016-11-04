import { combineReducers } from 'redux'
import {items} from './items';
import {users} from './users';
import {selectedItem} from './selectedItem'
import auth from './auth'



const initialState = {};

const rootReducer = combineReducers({items, selectedItem, users, auth});

export default rootReducer
