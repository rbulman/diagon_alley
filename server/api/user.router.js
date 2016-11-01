'use strict';

var router = require('express').Router();
var User = require('APP/db/models/user');

router.get('/', function(req,res,next){
  User.findAll({})
    .then(function(users){
      res.json(users);
    })
    .catch(next);
});

router.get('/:id', function(req,res,next){

  User.findById(req.params.id)
    .then(function(user){
      res.json(user);
    })
    .catch(next);
});

module.exports = router;
