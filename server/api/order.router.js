'use strict';

var router = require('express').Router();
var Order = require('APP/db/models/order');
var Item = require('APP/db/models/item');


// *-------------------------GET ROUTES ------------------------------*//

//Get specific order given id
//perhaps we save current order ID on state and get by ID when we view Cart
//or get details of cart from "order history"
router.get('/:id', function(req,res,next){

  Order.findById(req.params.id)
    .then(function(order){
      res.json(order);
    })
    .catch(next);
});

//get all orders by userid
//for grabbing list of order history
router.get('/user/:userid', function(req,res,next){

  Order.findAll({
    where: {
      user: req.params.userid,
      userType: 'user'
    }
  })
    .then(function(orders){
      res.json(orders);
    })
    .catch(next);
});

// get current order(s) for userid
router.get('/user/pending/:userid', function(req,res,next){

  Order.findAll({
    where: {
      user: req.params.userid,
      userType: 'user',
      status: 'pending'
    }
  })
    .then(function(orders){
      res.json(orders);
    })
    .catch(next);
});

// get completed order history
router.get('/user/completed/:userid', function(req,res,next){

  Order.findAll({
    where: {
      user: req.params.userid,
      userType: 'user',
      status: 'completed'
    }
  })
    .then(function(orders){
      res.json(orders);
    })
    .catch(next);
});



// get by session id
// make sure to be creating unique sesion id
// for getting persistant anonymous user order while in session
router.get('/session/:id', function(req,res,next){

  Order.findOne({
    where: {
      userType: 'session',
      user: req.params.id
    }
  })
    .then(function(orders){
      res.json(orders);
    })
    .catch(next);
});


// *------------------------- PUT ROUTES ------------------------------*//

// Updates the Order Instance
// POSSIBLE UPDATES:
//  - set status to complete
//  - change userType/user

// req.body should contain an object of attributes to change
router.put('/:id', function(req, res, next){
  Order.findById(req.params.id)
  .then(function(order){
    if(order){
      return order.update(req.body);
    }
  })
  .then(function(order){
    if(order){
      res.status(201).send(order);
    }
    else res.sendStatus(404);
  });
});


// Update joiny tables
// Possible updates:
//  - add item
//  - delete item

router.put('/addItem/:orderId/:itemId', function (req, res, next){
  const item = Item.findById(req.params.itemId);
  const order = Order.findById(req.params.orderId);
  Promise.all([item, order])
  .then(function(result){
    const item = result[0];
    const order = result[1];
    order.addItem(item);
  })
  .then(function(){
    console.log("item added to cart!");
  })
  .catch(next);
});

// *------------------------- POST ROUTES ------------------------------*//

//when user or session id holder adds to cart w/o an existing cart

//need to validate that sessionID is unique
router.post('/session/:id', function(req, res, next){
  Order.create({
    user: req.params.id,
    userType: 'session'
  })
  .then(function(){
    //do stuff?
  })
  .catch(next);
});

// current user ID should be on props somewhere
router.post('/user/:id', function(req, res, next){
  Order.create({
    user: req.params.id,
    userType: 'user'
  })
  .then(function(){
    //do stuff?
  })
  .catch(next);
});
// *------------------------- DELETE ROUTES ------------------------------*//

// ** EXTRA CREDIT **
// Delete session orders when session dies

router.put('/removeItem/:id', function (req, res, next){
  Item.findById(req.params.id)
  .then(function(item){
    Order.removeItem(item); // this should work with belongs to many association
  })
  .then(function(){
    console.log("item deleted from cart!");
  })
  .catch(next);
});


module.exports = router;
