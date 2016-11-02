'use strict'

const db = require('APP/db')

const Order = require('./order')
const Item = require('./item')
const User = require('./user')

const {expect} = require('chai')
//require('APP/seed.js')

describe('Order', () => {

	let testOrder;

	before('create new order', () => {
		return User.findById(1)
		.then((foundUser) => {
			return foundUser.createOrder({
				status: 'pending'
			})
		})
		.then((newOrder) => {
			testOrder = newOrder;
		})		
	})

	it('should be associated with a User', () => {
		expect(testOrder.user_id).to.be.equal(1)
	})

	it("should show up in user's list of orders", () => {
		Order.findAll({
			where: {
				user_id: 1
			}
		})
		.then((foundOrders) => {
			const foundId = foundOrders.map((element) => {
				return element.id;
			})
			expect(foundId).to.include(testOrder.id);
		})
	})
})