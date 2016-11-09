'use strict';

var router = require('express').Router();
var Order = require('APP/db/models/order');
var Item = require('APP/db/models/item');
var OrderItem = require('APP/db/models/orderItems')
const epilogue = require('../epilogue')
const {mustBeLoggedIn, selfOnly, forbidden, mustBeAdmin} = epilogue.filters


// *-------------------------GET ROUTES ------------------------------*//

//Get specific order given id
//perhaps we save current order ID on state and get by ID when we view Cart
//or get details of cart from "order history"

router.get('/cartItems', function(req, res, next){
  console.log('in /cartItems')
  let orderID = null;
  if(req.user){orderID = req.user.currentOrder}
  else if(req.session.orderId) {orderID = req.session.orderId;}
  console.log("/cartItems orderID: ", orderID)

  if (!orderID) return;

  else{
    Order.findOne({
      where: {id : orderID},
      include: [
        {
          model: OrderItem,
          include: [Item]
        }]
      })
    .then(function(order){
      res.json(order.orderItems);
    })
    .catch(err => console.log(err));
  }
})

//Get specific order given id
router.get('/cart', function(req, res, next){
  console.log('in /cart')
  let orderID = null;
  if(req.user){orderID = req.user.currentOrder}
  else if(req.session.orderId) {orderID = req.session.orderId;}
  console.log("/cartItems orderID: ", orderID)

  if (!orderID) return;

  else{
    Order.findById(orderID)
    .then(function(order){
      res.json(order);
    })
    .catch(err => console.log(err));
  }
})

router.get('/', function(req,res,next){
  console.log("Context: ", next)
  mustBeAdmin()(req, res, next)
  Order.findAll({})
    .then(function(orders){
      res.json(orders);
    })
    .catch(next);
});


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
/*
// get all items on current order for userid
router.get('/user/pending/items', function(req,res,next){
  console.log("REQ: ", req)
  if(req.user){var userID = req.user.id}
  else{
    console.log("i am a guest")
  }
  console.log("USER ID: ", userID)
  Order.findOne({
    where: {
      user_id: userID,
      // !! NON USERS SHOULD ALSO HAVE A CURRENT ORDER, BC YOU CAN CHECK 
      // OUT IF YOU ARE NOT A USER
      userType: 'user',
      status: 'pending'
    },
    include: [
    {
      model: OrderItem,
      include: [Item]
    }
    ]

  })
  .then(function(order){
    console.log("foundItems: ", order)
    res.json(order.orderItems);
  })
  .catch(err => console.log(err));
});

// get current pending order for userid
router.get('/user/pending', function(req,res,next) {
  console.log("REQ: ", req)
  if(req.user){var userID = req.user.id}
  else{
    console.log("i am a guest")
  }
  console.log("USER ID: ", userID)
  Order.findOne({
    where: {
      user_id: userID,
      // !! NON USERS SHOULD ALSO HAVE A CURRENT ORDER, BC YOU CAN CHECK 
      // OUT IF YOU ARE NOT A USER
      userType: 'user',
      status: 'pending'
    }
  })
  .then(function(order){
    console.log("order", order);
    res.json(order);
  })
  .catch(err => console.log(err));

})
*/
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


// Get all items on an order
// for cart this owuld be all the items on a pending order?

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

router.use('/addToCart/:itemId', function (req, res, next){
  if(!req.user){
    if(!req.session.orderId){
      Order.create({
      userType: 'guest',
      status: 'pending'
      })
      .then(order => {
        console.log("order: ", order)
        req.session.orderId = order.id
        req.body.orderID = order.id
        next()
      })

    }
    else {
      console.log("in else")
      req.body.orderID = req.session.orderId
      next()
    }
  }
  else {
  
    Order.findOrCreate({
      where: {
        user_id : req.user.id,
        status: 'pending',
        userType: 'user'
      }
    })
    .spread((order, created) => {
      req.body.orderID = order.id
      req.session.orderId = order.id
      next()
    })
    
  }
})


//ADD ITEM TO CART
router.put('/addToCart/:itemId', function (req, res, next){
      
  let orderID = req.body.orderID
  console.log("REQ.BODY.ORDERID: ", orderID)
  console.log("req.params.itemId: ", req.params.itemId )
  var itemPromise = Item.findById(req.params.itemId);
  var orderPromise = Order.findById(orderID);
  console.log("in put /addItem")
  //Item.findById
  Promise.all([itemPromise, orderPromise])
  .then(function(result){
    var item = result[0];
    var order = result[1];
    if(item && order){
      console.log("item && order")
      console.log("order.id: ", order.id)
      console.log("item.id: ", item.id)
      OrderItem.findOne({
        where : {
          order_id : order.id,
          item_id : item.id
        }
      })
      .then(function(orderItem){
        console.log("orderItem: ", orderItem)
        if(orderItem){
          //if the item is already in the cart, increment the quantity
          return orderItem.increment('quantity');
        }
        else {
          //if the order is not yet in the card, add it
          return order.addItem(item);
        }
      })
      .then(function(result){
        console.log('result', result)


        if(result[0] && result[0][0]) {
          res.status(201).send(result[0][0]);
        }
        else if (result){
          res.status(201).send(result)
        }
        else res.sendStatus(404); // shouldl this move outside if?
      })
      .catch(err => console.log(err))
    }})
  })


//MAKE ADD/REMOVE/CHANGE ROUTES DRIER
router.put('/addItem/:orderId/:itemId', function (req, res, next){
  var itemPromise = Item.findById(req.params.itemId);
  var orderPromise = Order.findById(req.params.orderId);
  console.log("in put /addItem")
  Promise.all([itemPromise, orderPromise])
  .then(function(result){
    var item = result[0];
    var order = result[1];
    if(item && order ){
      console.log("item && order")
      OrderItem.findOne({
        where : {
          order_id : order.id,
          item_id : item.id
        }
      })
      .then(function(orderItem){
        if(orderItem){
          //if the item is already in the cart, increment the quantity
          return orderItem.increment('quantity');
        }
        else {
          //if the order is not yet in the card, add it
          return order.addItem(item);
        }
      })
      .then(function(result){
        // console.log('result', result)
        if(result[0][0]) {
          res.status(201).send(result[0][0]);
        }
        else if (result){
          res.status(201).send(result)
        }
        else res.sendStatus(404); // shouldl this move outside if?
      })
      .catch(next)
    }})
  })



    //   return OrderItem.findOne({
    //     where: {
    //       order_id: order.id,
    //       item_id: item.id
    //     }
    //   })
    // //  return  order.getItems({
    // //     where: {
    // //       id : item.id
    // //     }
    // //   })
    //   .then(function(orderItem){
    //     console.log("orderItem length", orderItem.length)
    //     if(orderItem.length > 0){
    //       console.log("item from additem", orderItem)
    //       return order.addItem(item);
    //     }
    //     else {
    //       console.log("in else statement")
    //       // console.log("item", item)
    //       return order.addItem(item);
    //     }
    //   })
  //
  //     .then(function(association){
  //       console.log(association)
  //       if(association[0][0]) {
  //         res.status(201).send(association[0][0]);
  //       }
  //       else res.sendStatus(404); // shouldl this move outside if?
  //     })
  //     .catch(next)
  //   } //end of if
  //   //need to compensate for bad order/item numbers
  // })

//});

  router.put('/setQuantity/:orderId/:itemId', function(req, res, next){
    var num = req.body.quantity
    OrderItem.findOne({
      where: {
        order_id: req.params.orderId,
        item_id: req.params.itemId
      }
    })
    .then(function(orderItem){
      orderItem.update({quantity: num});
      res.status(201)
    })
    .catch(next);
  })


  router.put('/removeItem/:orderId/:itemId', function (req, res, next){
    OrderItem.findOne({
      where: {
        order_id: req.params.orderId,
        item_id: req.params.itemId
      }
    })
    .then(function(orderItem){
      orderItem.decrement('quantity');
      res.status(201)
    })
    .catch(next);
  });

// *------------------------- POST ROUTES ------------------------------*//

//when user or session id holder adds to cart w/o an existing cart


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


module.exports = router;

