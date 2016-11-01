import { combineReducers } from 'redux'
import itemsReducer from './items';
import usersReducer from './users';

const initialState = {};

const rootReducer = combineReducers({itemsReducer, usersReducer});

export default rootReducer
