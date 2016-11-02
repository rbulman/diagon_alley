import { combineReducers } from 'redux'
import {items} from './items';
import usersReducer from './users';
import {selectedItem} from './selectedItem'
import Auth from './auth'

var auth = Auth.default


const initialState = {};

const rootReducer = combineReducers({items, selectedItem, usersReducer, auth});

export default rootReducer
