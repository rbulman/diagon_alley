'use strict'

const epilogue = require('./epilogue')
const db = require('APP/db')
const User = require('APP/db/models/user')

const customUserRoutes = require('express').Router() 

customUserRoutes.post('/newUser', function(req, res, next){
	console.log("reqBody: ", req.body)
	User.findOne({
		where:{
			email : req.body.email
		}
	})
	.then(user => {
		if(!user){
			User.create({
				name: req.body.name,
				email: req.body.email,
				password: req.body.password
			})
			.then(user => {
				res.status(201).send(user)
		})
		}
		else{
			res.status(400).send("An account with that email already exists")
		}
	})
	
})

// Custom routes go here.
// customUserRoutes.get("/", function(req, res, next){
// 	console.log("in custom REQ.USER: ", req.user)
// 	if(!req.user || !req.user.isAdmin){
// 		res.sendStatus(403)
// 		return;
// 	}
// 	User.findAll({})
// 	.then((user) => res.send(user))
// 	.catch(next)
// })
module.exports = customUserRoutes

//Epilogue will automatically create standard RESTful routes
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



