'use strict';

const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define('orders', {
	status: {
		type: Sequelize.STRING,
		defaultValue: 'pending'
	},
	dateCompleted: {
		type: Sequelize.DATE,
		defaultValue: null
	}
})

module.exports = Order
