'use strict';
var Promise = require('bluebird');


var router = require('express').Router();
var Review = require('APP/db/models/review');
const Item = require('APP/db/models/item');
const User = require('APP/db/models/user');

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
// router.get('/:userId', function(req,res,next){
//   User.findById(req.params.userId)
//     .then(function(user){
//       return user.getReviews()     
//     })
//     .then(function(reviews) {
//         res.jeson(reviews);
//     })
//     .catch(next);
// });


//POST a review (purely creating the review, not attaching it to an item)
 router.post('/addReview', function(req,res,next) {
     Review.create(req.body)
     .then(function(newReview) {
       res.json(newReview);
     })
     .catch(next);
 })


// POST a review *to an item* 
 router.post('/addReview/:itemId', function(req, res, next){
   let newReview;
   const review = Review.create(req.body); 
   const item = Item.findById(req.params.itemId);
   Promise.all([review, item])
   .spread(function(review,item) {
     newReview = review;
     return item.addReview(review)
    })
    .then(function() {
      res.send(newReview)
    })
    .catch(next);
  });



// DELETE a review
router.delete('/deleteReview/:reviewId', function (req, res){
    res.send('Deleted');
});


// UPDATE a review
router.put('/:reviewId', function(req,res,next){
  Review.findById(req.params.reviewId)
    .then(function(review){
      review.update(req.body);
    })
    .catch(next);
});


module.exports = router;