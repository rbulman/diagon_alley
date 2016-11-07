'use strict';

var router = require('express').Router();
var Item = require('APP/db/models/item');
var Review = require('APP/db/models/review');

router.get('/', function(req,res,next){
  Item.findAll({})
    .then(function(items){
      res.json(items);
    })
    .catch(next);
});

router.get('/:id', function(req,res,next){
  Item.findById(req.params.id, {include: [ Review ]})
    .then(function(item){
      res.json(item);
    })
    .catch(next);
});

module.exports = router;
