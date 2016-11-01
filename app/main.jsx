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
import store from './store'
import Root from './components/Root'

render (
  <Provider store={store}>
   {/* <Root/> */}
   <Router history={hashHistory}>
   	<Route path='/' component={AppContainer}>
   		<IndexRoute component={HomeContainer} />
   		<Route path="about" component={AboutContainer} />
   		<Route path="login" component={LoginContainer} />
      <Route path="items" component={ItemList} />
   	</Route>
   </Router>
  </Provider>,
  document.getElementById('main')
)