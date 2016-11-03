'use strict'

const db = require('APP/db')
const Category = require('./category')
const Item = require('./item')
const {expect} = require('chai')
//require('APP/seed.js')

describe('Category', () => {

  // let testCategory;

  // before('create a new category', () => {
  //   return Category.create({
  //     name: 'potions'
  //   })
  //   .then((newCategory) => {
  //     testCategory = newCategory;
  //   })
  // })

  // describe('test Category', () => {
  //   it('should have both name and id fields', () => {
  //     expect(testCategory.name).to.be.equal('potions');
  //     expect(testCategory.id).to.be.a('number');
  //   })

  //   it('should not have duplicate entries', () => {
  //     Category.create({
  //       name: 'potions'
  //     })
  //     .then(() => {
  //       return Category.findAll({
  //         where: {name: 'potions'}
  //       })
  //     })
  //     .then((foundCategories) => {
  //       expect(foundCategories.length).to.be.equal(1);
  //     })
  //   })
  // })

  // describe('test item-category relationship', () => {
  //   let testItem;
  //   before('create an item entry', () => {

  //     return Item.create({
  //       name: "Canary Creams",
  //       description: "eat at your own risk!",
  //       price: 4,
  //       inventory: 10,
  //       category: "pranking",
  //       imageURL: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg"
  //     })
  //     .then((newItem) => {
  //       testItem = newItem;
  //     })
  //     .then(() => {
  //       testItem.addCategory(testCategory)
  //     })
  //   })

  //   it('should be a separate table consisting of name and id', () => {

  //   })
  //   // it('should have a join table with Items')
  //   it('Items and Categories have a many-to-many relationship')
    
  //   it('item must have at least one category', () => {
  //     Item.findOne({
  //       where: {name:'Canary Creams'},
  //       include: [{
  //                 model: Category,
  //                 through: {attributes: ["name"]}
  //               }]
  //     })
  //     .then((foundItem) => {
  //       expect(foundItem.categories).to.be.instanceof(Array);
  //       expect(foundItem.categories.length).to.be.above(0);
  //     })
  //   })

  //   it('either provide a default category or throw validation error')

  // })
})