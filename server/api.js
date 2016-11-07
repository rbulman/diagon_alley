'use strict'
// var xhr = new XMLHttpRequest();
// xhr.open(...);
// xhr.withCredentials = true;
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const db = require('APP/db')
const api = module.exports = express.Router()
const path = require('path');

// -------------------------


api
  .get('/heartbeat', (req, res) => res.send({ok: true,}))
  .use('/', require('./init'))
  .use('/auth', require('./auth'))
  .use('/items', require('./api/item.router'))
  .use('/reviews', require('./api/review.router'))
  .use('/orders', require('./api/order.router'))
// // Epilogue can make routes for us
// epilogue.initialize({app: api, sequelize: db})

// var users = epilogue.resource({
//   model: db.model('users'),
//   endpoints: ['/users', '/users/:id']
// });

// const mustBeLoggedIn = (req, res, context) => {
//   if (!req.user) {
//     res.status(401).send('You must be logged in')
//     return context.stop
//   }

//   return context.continue
// }

// const selfOnly = action => (req, res, context) => {
//   if (req.params.id !== req.user.id) {
//     res.status(403).send(`You can only ${action} yourself.`)
//     return context.stop
//   }
//   return context.continue
// }

// const forbidden = message => (req, res, context) => {
//   res.status(403).send(message)
//   return context.stop
// }

// users.delete.auth(mustBeLoggedIn)
// users.delete.auth(selfOnly)
// users.list.auth(forbidden)
// users.read.auth(mustBeLoggedIn)


  .use('/users', require('./users'))


// Send along any errors
api.use((err, req, res, next) => {
	console.log("ERROR")
  res.status(500).send(err)
})

// No routes matched? 404.

api.use((req, res) => res.status(404).end())

module.exports = api
