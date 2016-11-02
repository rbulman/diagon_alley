'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import {Route, Router, hashHistory, IndexRoute, IndexRedirect} from 'react-router';
import AppContainer from 'APP/app/containers/AppContainer'
import AboutContainer from 'APP/app/containers/AboutContainer'
import HomeContainer from 'APP/app/containers/HomeContainer'
import LoginContainer from 'APP/app/containers/LoginContainer'
import ItemList from 'APP/app/components/ItemList'
import ItemListContainer from 'APP/app/containers/ItemListContainer'
import ItemContainer from 'APP/app/containers/ItemContainer'
import store from './store'
import Root from './components/Root'
import {fetchSelectedItem} from 'APP/app/reducers/selectedItem'

const loadSingleItem = ({params}) => {
  console.log("SELECTED ITEM ID: ", params.id)
  store.dispatch(fetchSelectedItem(params.id))
}

render (
  <Provider store={store}>
   {/* <Root/> */}
   <Router history={hashHistory}>
   	<Route path='/' component={AppContainer}>
   		<IndexRoute component={HomeContainer} />
   		<Route path="about" component={AboutContainer} />
   		<Route path="login" component={LoginContainer} />
      <Route path="items" component={ItemListContainer} />
      <Route path="items/:id" component={ItemContainer} onEnter={loadSingleItem} />
   	</Route>
   </Router>
  </Provider>,
  document.getElementById('main')
)