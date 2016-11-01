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
})