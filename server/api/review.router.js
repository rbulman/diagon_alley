'use strict';

var router = require('express').Router();
var Review = require('APP/db/models/review');
const Item = require('APP/db/models/item');
const User = require('APP/db/models/user');

// GET all reviews for an Item
router.get('/:itemId', function(req,res,next){
  Item.findById(req.params.itemId)
    .then(function(item){
        return item.getReviews()   // this probably isn't the automatic method for the association
    })
    .then(function(reviews) {
        res.json(reviews);
    })
    .catch(next);
});

// GET all reviews by a User
router.get('/:userId', function(req,res,next){
  User.findById(req.params.userId)
    .then(function(user){
      return user.getReviews()      // automatic method for association?
    })
    .then(function(reviews) {
        res.jeson(reviews);
    })
    .catch(next);
});


// POST a review
// (handle login!)
router.post('/:itemId', function(req, res, next){
  Review.create(req.body)
  .then(function(review){   // how to associate this review with an item and user
    //do stuff?
  })
  .catch(next);
});


// DELETE a review
router.put('/deleteReview/:id', function (req, res, next){
  Item.findById(req.params.id)
  .then(function(item){
    Order.removeItem(item) // this should work with belongs to many association
  })
  .then(function(){
    console.log("item added to cart!");
  })
  .catch(next);
});


// UPDATE a review
router.put('/:id', function(req,res,next){
  Review.findById(req.params.id)
    .then(function(review){
      review.update(req.body);
    })
    .catch(next);
});

module.exports = router;