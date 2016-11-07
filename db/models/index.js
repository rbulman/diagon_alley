'use strict';
var db = require('APP/db')

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Item = require('./item')
const Category = require('./category')
const Order = require('./order')
const Review = require('./review')
const OrderItems = require('./orderItems')

// User.hasMany(Item);
// If we want a cart and a wishlist, we should have a wishlist and a cart model so we can
// do Wishlist.hasMany(Item) and Cart.hasMany(Item) then have Cart.belongsTo(User)
// unless we can do something like the senior checkpoint where every message had a to and from
// that were both users

Item.belongsToMany(Category, {through: "items_categories"})
Category.belongsToMany(Item, {through: "items_categories"})

Order.belongsToMany(Item, {through: OrderItems })
	/* e.g.
	 * order.getItem()
	 * order.hasItem()
	 * order.addItem()
	 */


//Item.belongsToMany(User)

//User.hasMany(Review, {as: 'Review'})
//Item.hasMany(Review, {as: 'Review'})


module.exports = db;
