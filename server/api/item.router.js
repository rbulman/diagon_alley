'use strict';

var router = require('express').Router();
var Item = require('APP/db/models/item');

router.get('/', function(req,res,next){
  console.log("IN ITEMS ROUTE: ", req.user.name)
  Item.findAll({ include: [ Reviews ] })
    .then(function(items){
      res.json(items);
    })
    .catch(next);
});

router.get('/:id', function(req,res,next){
  Item.findById(req.params.id, { include: [ Reviews ] })
    .then(function(item){
      res.json(item);
    })
    .catch(next);
});

module.exports = router;
