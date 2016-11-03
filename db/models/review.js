'use strict';

const Sequelize = require('sequelize')
const db = require('APP/db')

const Review = db.define('reviews', {
	stars: {
		type: Sequelize.INTEGER,
		validate: {min: 0, max:5}
	},
	content: Sequelize.TEXT
})

module.exports = Review;