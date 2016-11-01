'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Item = db.define('items', {
	name: { 
		type: Sequelize.STRING,
		allowNull: false
	},
	description: Sequelize.TEXT,
	price: Sequelize.INTEGER,
	inventory: Sequelize.INTEGER
	//image URL
	//tags/categories?

})

module.exports = Item