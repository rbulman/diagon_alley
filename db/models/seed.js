var Promise = require('bluebird');
var db = require('./db/models');
var User = require('./db/models/user');
var Item = require('./db/models/item');

console.log("db: ", db)
var data = {
  user: [
    {name: "Harry Potter", email: "theChosenOne@hogwarts.com", password: "ispeaktosnakes" },
    {name: "Ron Weasley", email: "loyalGinger@hogwarts.com", password: "ilovehermione" },
    {name: "Hermione Granger", email: "beautifulBraniac@hogwarts.com", password: "orworseexpelled" },
  ],
  item: [
    {name: "Anti Gravity Hat", description: "Ruin a gentleman's day by making his hat fly away!", price: 11, inventory: 20},
    {name: "Aviatomobile", description: "A flying toy car", price: 12, inventory: 23},
    {name: "Headless Hats", description: "Make the wearer's head invisible (along with the hat itself).", price: 17, inventory: 40},
  ]
};

db.sync({force: true})
.then(function () {
  console.log("Dropped old data, now inserting data");
  return Promise.map(Object.keys(data), function (name) {
    return Promise.map(data[name], function (item) {
      return db.model(name)
      .create(item);
    });
  });
})
.then(function () {
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
