'use strict';

var router = require('express').Router();
var Review = require('APP/db/models/review');
const Item = require('APP/db/models/item');
const User = require('APP/db/models/user');


// GET all orders 
router.get('/', function(req,res,next) {
  Review.findAll({})
  .then(function(reviews) {
    res.json(reviews);
  })
  .catch(next);
})


// GET all reviews for an Item
router.get('/:itemId', function(req,res,next){
  Item.findById(req.params.itemId)
    .then(function(item){
        return item.getReviews()   
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
      return user.getReviews()      
    })
    .then(function(reviews) {
        res.jeson(reviews);
    })
    .catch(next);
});

//separate route to greate the review
//POST a review (purely creating the review, not attaching it to an item)
router.post('/addReview', function(req,res,next) {
    Review.create(req.body)
    .then(function(newReview) {
      res.json(newReview);
    })
    .catch(next);
})


// POST a review *to an item* - this establishes association by adding an item id to the review
router.post('/addReview/:itemId/:reviewId', function(req, res, next){
  const review = Review.findById(req.params.reviewId);
  const item = Item.findById(req.params.itemId);
  Promise.all([review, item])
  .spread(function(review,item) {
    item.addReview(review)
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