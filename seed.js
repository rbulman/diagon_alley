var Promise = require('bluebird');
var db = require('./db');
var User = require('./db/models/user');
var Item = require('./db/models/item');

console.log("db: ", db)
var data = {
  users: [
    {name: "Harry Potter", email: "theBoyWhoLived@hogwarts.com", password: "ispeaktosnakes" },
    {name: "Ron Weasley", email: "loyalGinger@hogwarts.com", password: "ilovehermione" },
    {name: "Hermione Granger", email: "beautifulBraniac@hogwarts.com", password: "orworseexpelled" },
  ],
  items: [
    {name: "Anti Gravity Hat", description: "Ruin a gentleman's day by making his hat fly away!", price: 11, inventory: 20},
    {name: "Aviatomobile", description: "A flying toy car", price: 12, inventory: 23},
    {name: "Headless Hats", description: "Make the wearer's head invisible (along with the hat itself).", price: 17, inventory: 40},
  ]
};

db.didSync
.then(function(){return db.sync({force: true})})
.then(function () {
  console.log("Dropped old data, now inserting data");
  return Promise.map(Object.keys(data), function (name) {
    console.log("model name: ", name)
    return Promise.map(data[name], function (item) {
      console.log("item: ", item)
      return db.model(name)
      .create(item);
    });
  });
})
.then(function (blah) {
  console.log("in then function: ", blah);
  console.log("Finished inserting data");
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
})
.finally(function () {
  db.close() // uses promises but does not return a promise. https://github.com/sequelize/sequelize/pull/5776
  console.log('connection closed'); // the connection eventually closes, we just manually do so to end the process quickly
  return null; // silences bluebird warning about using non-returned promises inside of handlers.
});
