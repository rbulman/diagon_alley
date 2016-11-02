'use strict'

const db = require('APP/db')
const Item = require('./item')
const {expect} = require('chai')
//require('APP/seed.js')

describe('Item', () => {
  //before('RUNNING WITH BEFORE HOOK DROPPED TABLE wait for the db', () => db.didSeed)

  describe('seeds database: ', () => {
    it('has items', () =>
      Item.findAll()
        .then(items => expect(items.length).to.equal(3)))
        

    // it("resolves false if the password doesn't match", () =>
    //   User.create({ password: 'ok' })
    //     .then(user => user.authenticate('not ok'))
    //     .then(result => expect(result).to.be.false))
  })

  describe('basic tests' () => {
    before('create an item entry', () => {
      let testItem;

      Item.create({
        name: "Canary Creams",
        description: "eat at your own risk!"
        price: 4,
        inventory: 10,
        category: "pranking"
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg"
      })
      .then((newItem) => {
        testItem = newItem;
      })

    })

    it('has a title', () => {
      expect(testItem.name).to.be.equal("Canary Creams");
    })
    it('has a description', () => {
      expect(testItem.name).to.be.equal("eat at your own risk!");
    })
    it('has a price', () => {
      expect(testItem.name).to.be.equal(4);
    })
    it('tracks inventory' () => {
      expect(testItem.inventory).to.be.equal(10);
    })
  })
})