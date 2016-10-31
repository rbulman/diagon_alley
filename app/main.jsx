'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import {Route, Router, hashHistory, IndexRoute} from 'react-router';
import AppContainer from 'APP/app/containers/AppContainer'

import store from './store'
import Root from './components/Root'

render (
  <Provider store={store}>
   {/* <Root/> */}
   <Router history={hashHistory}>
   	<Route path='/'>
   		<IndexRoute component={AppContainer} />
   	</Route>
   </Router>
  </Provider>,
  document.getElementById('main')
)