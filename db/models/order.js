'use strict';

const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define('orders', {
	user: {
		type: Sequelize.INTEGER,
	},
	userType: {
		type: Sequelize.STRING // 'session' vs 'user'
	},
	status: {
		type: Sequelize.STRING,
		defaultValue: 'pending'
	},
	dateCompleted: {
		type: Sequelize.DATE,
		defaultValue: null
	}
}, {
	getterMethods: {

	}
})

module.exports = Order
