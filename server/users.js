'use strict'

const epilogue = require('./epilogue')
const db = require('APP/db')

const customUserRoutes = require('express').Router() 

// Custom routes go here.

module.exports = customUserRoutes

// Epilogue will automatically create standard RESTful routes
const users = epilogue.resource({
  model: db.model('users'),
  endpoints: ['/users', '/users/:id']
})

const {mustBeLoggedIn, selfOnly, forbidden, mustBeAdmin} = epilogue.filters
users.delete.auth(mustBeLoggedIn)
users.delete.auth(selfOnly('delete'))
//users.list.auth(forbidden('cannot list users'))
users.list.auth(mustBeAdmin('cannot list users'))
users.read.auth(mustBeLoggedIn)
