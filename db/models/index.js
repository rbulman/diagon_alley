'use strict';
var db = require('APP/db')

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Item = require('./item')

// User.hasMany(Item);
// If we want a cart and a wishlist, we should have a wishlist and a cart model so we can
// do Wishlist.hasMany(Item) and Cart.hasMany(Item) then have Cart.belongsTo(User)
// unless we can do something like the senior checkpoint where every message had a to and from
// that were both users

Item.belongsToMany(User, {through: "cart"})
User.belongsToMany(Item, {through: "cart"})
Item.belongsToMany(User, {through: "wishlist"})
User.belongsToMany(Item, {through: "wishlist"})
//Item.belongsToMany(User)
module.exports = db;
