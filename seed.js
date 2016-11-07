var Promise = require('bluebird');
var db = require('./db');
var User = require('./db/models/user');
var Item = require('./db/models/item');
var Review = require('./db/models/review');

console.log("DROPPED DATABASE: NO BEFORE HOOK IN TESTS")
console.log("db name: ", db.config.database)
var data = {
  users: [
    {
      name: "Harry Potter",
      email: "theBoyWhoLived@hogwarts.com",
      password: "ispeaktosnakes"
    }, {
      name: "Ron Weasley",
      email: "loyalGinger@hogwarts.com",
      password: "ilovehermione"
    }, {
      name: "Hermione Granger",
      email: "beautifulBraniac@hogwarts.com",
      password: "orworseexpelled"
    },
    {
      name: "Albus Dumbledore",
      email: "headmaster@hogwarts.com",
      password: "trustsnape",
      isAdmin: true
    }
  ],
  items: [
    {
      name: "Anti Gravity Hat",
      description: "Ruin a gentleman's day by making his hat fly away!",
      price: 11,
      inventory: 20,
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg",
      categories: ["hats"]
    }, {
      name: "Aviatomobile",
      description: "A flying toy car",
      price: 12,
      inventory: 23,
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg"
    }, {
      name: "Headless Hats",
      description: "Make the wearer's head invisible (along with the hat itself).",
      price: 17,
      inventory: 40,
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg"
    },
    {
      name: "Canary Creams",
      description: "Temporarily transfigures the eater into a canary.",
      price: 3,
      inventory: 213,
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg",
      categories: ["sweets"]
    },
    {
      name: "Edible Dark Marks",
      description: "They'll make anyone sick!",
      price: 5,
      inventory: 7,
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg",
      categories: ["sweets", "dark"]
    },
    {
      name: "Skiving Snackbox",
      description: "A range of sweets to make the user ill.",
      price: 10,
      inventory: 24,
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg",
      categories: ["sweets"]
    },
    {
      name: "Ton-Tongue Toffee",
      description: "Causes the tongue to rapidly swell and turn purple.",
      price: 11,
      inventory: 20,
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg",
      categories: ["sweets"]
    },
  ],
  categories: [
    {name: 'hats'},
    {name: 'flying'},
    {name: 'sweets'},
    {name: 'dark'},
    {name: 'flying'}
  ],
   reviews: [
     {
       stars: 5,
       content: "Great product! My wife Debbie and I use this to prank the local schoolchildren. Would recommend.",
       item_id: 1
     },
     {
       stars: 4,
       content: "Great product! My wife Debbie and I use this to prank the local schoolchildren. Would recommend.",
       item_id: 2
     },
     {
       stars: 5,
       content: "Great product! My wife Debbie and I use this to prank the local schoolchildren. Would recommend.",
       item_id: 3
     },
     {
       stars: 5,
       content: "Great product! My wife Debbie and I use this to prank the local schoolchildren. Would recommend.",
       item_id: 4
     },
     {
       stars: 5,
       content: "Great product! My wife Debbie and I use this to prank the local schoolchildren. Would recommend.",
       item_id: 5
     },
     {
       stars: 3,
       content: "It is so great I love it so much yes",
       item_id: 6
     },
     {
       stars: 5,
       content: "I would totes buy this again.",
       item_id: 7
     },
     {
       stars: 4,
       content: "This is a great product. The best. I have a lot of products, let me tell you, and this one- it's fantastic.",
       item_id: 1
     },
     {
       stars: 5,
       content: "This is a great product. The best. I have a lot of products, let me tell you, and this one- it's fantastic.",
       item_id: 2
     },
     {
       stars: 5,
       content: "This is a great product. The best. I have a lot of products, let me tell you, and this one- it's fantastic.",
       item_id: 3
     },
     {
       stars: 5,
       content: "This is a great product. The best. I have a lot of products, let me tell you, and this one- it's fantastic.",
       item_id: 4
     },
     {
       stars: 5,
       content: "This is a great product. The best. I have a lot of products, let me tell you, and this one- it's fantastic.",
       item_id: 5
     },
     {
       stars: 5,
       content: "I am very happy with this product. Very good product.",
       item_id: 6
     },
     {
       stars: 4,
       content: "I am very happy with this product.",
       item_id: 7
     },
     {
       stars: 5,
       content: "Very good product.",
       item_id: 1
     },
     {
       stars: 5,
       content: "I like this. It is good.",
       item_id: 2
     }
   ]


  // orders: [
  //   {
  //     user_id: 1,
  //     status: 'pending',
  //   }, {
  //     user_id: 2,
  //     status: 'pending'
  //   }
  // ]
};

module.exports = shouldClose => db.didSync
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
  //console.log("in then function: ", blah);
  console.log("Finished inserting data");
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
})
.finally(function () {
  shouldClose && db.close() // uses promises but does not return a promise. https://github.com/sequelize/sequelize/pull/5776
  console.log('connection closed'); // the connection eventually closes, we just manually do so to end the process quickly
  return null; // silences bluebird warning about using non-returned promises inside of handlers.
});

if (require.main === module) {
  module.exports(true)
}
