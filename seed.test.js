const db = require('APP/db')
const {expect} = require('chai')
const Item = require('APP/db/models/item')



describe('Initialize db before tests', () => {
	
  before('Before running any tests, seed db', () => db.didSeed)

  describe('seeds database: ', () => {
    it('has items', () =>
      Item.findAll()
        .then(items => expect(items.length).to.equal(3)))
})
})

