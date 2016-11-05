'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider, connect } from 'react-redux'
import {Route, Router, hashHistory, IndexRoute, IndexRedirect} from 'react-router';
import AppContainer from 'APP/app/containers/AppContainer'
import AboutContainer from 'APP/app/containers/AboutContainer'
import HomeContainer from 'APP/app/containers/HomeContainer'
import ItemList from 'APP/app/components/ItemList'
import ItemListContainer from 'APP/app/containers/ItemListContainer'
import AdminContainer from 'APP/app/containers/AdminContainer'
import ItemContainer from 'APP/app/containers/ItemContainer'
import UsersContainer from 'APP/app/containers/UsersContainer'
import store from './store'
import Root from './components/Root'
import {fetchSelectedItem} from 'APP/app/reducers/selectedItem'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import {getItems} from './reducers/items'
import {getUsers} from './reducers/users'
import axios from 'axios'

const loadSingleItem = ({params}) => {
  console.log("SELECTED ITEM ID: ", params.id)
  store.dispatch(fetchSelectedItem(params.id))
}

const loadDatabase = (items, users) => {
  console.log("ITEMS IN loadDatabase: ", items)
  store.dispatch(getItems(items))
  //store.dispatch(getUsers(users))
}

const onAppEnter = (input) => {
  console.log("APP INPUT: ", input)
 
 return Promise.all([
      fetch('/api/items').then(res => res.json())
      //fetch('/api/users').then(res => res.json())
    ])
    .then(results => loadDatabase(...results))
}

const loadAdminDatabase = (items, users) => {
  console.log("Users IN loadDatabase: ", users)
  //store.dispatch(getItems(items))
  store.dispatch(getUsers(users))
}

const onAdminEnter = (input) => {
  console.log("APP INPUT: ", input)
 
 return Promise.all([
      fetch('/api/items').then(res => res.json()),
      axios.get('/api/users').then(res => res.data)
    ])
    .then(results => loadAdminDatabase(...results))
}

render (
  <Provider store={store}>
   {/* <Root/> */}
   <Router history={hashHistory}>
   	<Route path='/' component={AppContainer} >
   		<IndexRoute component={HomeContainer}/>
   		<Route path="about" component={AboutContainer} />
   		<Route path="login" component={Login} /> 
      <Route path="items" component={ItemListContainer} />
      <Route path="items/:id" component={ItemContainer} onEnter={loadSingleItem} />
      <Route path="admin" component={AdminContainer} onEnter={onAdminEnter}>
        <Route path="users" component={UsersContainer} />
        <Route path="items" component={ItemListContainer}/>
      </Route>
   	</Route>
   </Router>
  </Provider>,
  document.getElementById('main')
)