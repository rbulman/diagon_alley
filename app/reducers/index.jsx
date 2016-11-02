import { combineReducers } from 'redux'
import {items} from './items';
import usersReducer from './users';
import {selectedItem} from './selectedItem'

const initialState = {};

const rootReducer = combineReducers({items, selectedItem, usersReducer});

export default rootReducer
