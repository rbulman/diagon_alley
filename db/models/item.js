'use strict';

const Sequelize = require('sequelize')
const db = require('APP/db')

const Item = db.define('items', {
	name: { 
		type: Sequelize.STRING,
		allowNull: false
	},
	description: {
		type:Sequelize.TEXT,
		allowNull: false
	},
	price: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	inventory: {
		type: Sequelize.INTEGER,
		defaultValue: 0
	},
	imageURL: {
		type: Sequelize.STRING,
		isUrl: true,
		defaultValue: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg"
	}
	//tags/categories?

})

module.exports = Item
