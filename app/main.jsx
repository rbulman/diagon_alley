'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider, connect } from 'react-redux'
import {Route, Router, browserHistory, IndexRoute, IndexRedirect} from 'react-router';
import AppContainer from 'APP/app/containers/AppContainer'
import AboutContainer from 'APP/app/containers/AboutContainer'
import HomeContainer from 'APP/app/containers/HomeContainer'
import ItemList from 'APP/app/components/ItemList'
import ItemListContainer from 'APP/app/containers/ItemListContainer'
import AdminContainer from 'APP/app/containers/AdminContainer'
import OrdersContainer from 'APP/app/containers/OrdersContainer'
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

import {fetchCartItems} from 'APP/app/reducers/cartItems'
import {fetchCart} from 'APP/app/reducers/cart'

import CartContainer from 'APP/app/containers/CartContainer'
import ShippingContainer from 'APP/app/containers/ShippingContainer'
import CheckoutContainer from 'APP/app/containers/CheckoutContainer'
import AccountPageContainer from 'APP/app/containers/AccountPageContainer'

const loadSingleItem = ({params}) => {
  console.log("SELECTED ITEM ID: ", params.id)
  store.dispatch(fetchSelectedItem(params.id))
}



const onCartEnter = () => {
  console.log("LOAD CART");
  store.dispatch(fetchCartItems())
}

const onCheckoutEnter = () => {
  console.log('LOAD CHECKOUT')
  store.dispatch(fetchCart())
}

render (
  <Provider store={store}>
   {/* <Root/> */}
   <Router history={browserHistory}>
   	<Route path='/' component={AppContainer} >
   		<IndexRoute component={HomeContainer}/>
   		<Route path="about" component={AboutContainer} />
   		<Route path="login" component={Login} /> 
      <Route path="items" component={ItemListContainer} />
      <Route path="items/:id" component={ItemContainer} onEnter={loadSingleItem} />
      <Route path="accountPage" component={AccountPageContainer} />
      <Route path="admin" component={AdminContainer}>
        <Route path="orders" component={OrdersContainer} />
        <Route path="users" component={UsersContainer} />
        <Route path="items" component={ItemListContainer}/>
      </Route>

      <Route path="cart" component={CartContainer} />
      <Route path="shipping" component={ShippingContainer} />
      <Route path="checkout" component={CheckoutContainer} onEnter={onCheckoutEnter} />

   	</Route>
   </Router>
  </Provider>,
  document.getElementById('main')
)