'use strict';

const Sequelize = require('sequelize')
const db = require('APP/db')
const Item = require('APP/db/models/item')
const OrderItems = db.define('orderItems', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    validate: {
      min: 0,
    }
  }
},{
  instanceMethods: {
    // moce this to put routes?
    // changeQuantity: function(change, number){
    //   // Item.findById(item_id).then( item => tobeincremented = item ...s)
    //   switch(change){
    //     case 'add' :
    //       // if(this.quantity === item.inventory)
    //       this.increment('quantity');
    //       break;
    //     case 'minus':
    //       this.decrement('quantity');
    //       break;
    //     case 'set':
    //       this.update({quantity: number});
    //       break;
    //     default:
    //       break;
    //   }
    // }
  }
})

module.exports = OrderItems;
