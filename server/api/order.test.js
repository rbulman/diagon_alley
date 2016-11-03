const request = require('supertest-as-promised');
const {expect} = require('chai');
const db = require('APP/db');
const Order = require('APP/db/models/order');
const Item = require('APP/db/models/item');
const app = require('APP/server/start');
const supertest = require('supertest');
const agent = supertest.agent(app);


describe('Orders routes', function(){

    before(function () {
      return db.sync({force: true});
    });

    afterEach(function () {
      return db.sync({force: true});
    });

    describe('GETs orders', function(){
      var theOrder;

      //create an order instance
      beforeEach(function() {
        var ordArray = [
          {
            user: 1,
            userType: 'user'
          },
          {
            user: 1,
            userType: 'user',
            status: 'completed'
          },
          {
            user: 2,
            userType: 'user'
          },
          {
            user: 1,
            userType: 'session'
          }
        ]

        return Order.bulkCreate(ordArray)

      })

      it('by user id (logged in)', function(done){
        agent
        .get('/api/order/user/1')
        .expect(200)
        .end(function(err, res){
          if(err) return done(err);
          expect(res.body).to.be.instanceof(Array);
          expect(res.body).to.have.length(2);
          // console.log(res.body);
          done();
        })
      })

      it('by order id', function(done){
        agent.get('/api/order/1')
        .expect(200)
        .end(function(err, res){
          if(err) return done(err);
          expect(res.body.userType).to.be.equal('user');
          expect(res.body.user).to.be.equal(1);
          expect(res.body.status).to.be.equal('pending');
          done()
        })
      })

      it('by user id and pending status', function(done){
        agent
        .get('/api/order/user/pending/1')
        .expect(200)
        .end(function(err, res){
          if(err) return done(err);
          expect(res.body).to.be.instanceof(Array);
          expect(res.body).to.have.length(1);
          // console.log(res.body);
          expect(res.body[0].user).to.be.equal(1);
          done();
        })
      })

      it('by user id and completed status', function(done){
        agent
        .get('/api/order/user/completed/1')
        .expect(200)
        .end(function(err, res){
          if(err) return done(err);
          expect(res.body).to.be.instanceof(Array);
          expect(res.body).to.have.length(1);
          // console.log(res.body);
          done();
        })
      })

      it('by session id (not logged in)', function(done){
        agent
        .get('/api/order/session/1')
        .expect(200)
        .end(function(err, res){
          if(err) return done(err);
          expect(res.body).to.be.instanceof(Object);
          expect(res.body.userType).to.be.equal('session');
          expect(res.body.user).to.be.equal(1);
          expect(res.body.status).to.be.equal('pending');
          // console.log(res.body);
          done();
        })
      })
    })

    describe('PUTs orders', function(){
      var theOrders;
      //create an order instance
      beforeEach(function() {
        var ordArray = [
          {
            user: 1,
            userType: 'user'
          },
          {
            user: 1,
            userType: 'user',
            status: 'completed'
          },
          {
            user: 2,
            userType: 'user'
          },
          {
            user: 1,
            userType: 'session'
          }
        ];

        return Order.bulkCreate(ordArray)
          .then(function(array){
            theOrders = array;
          });
      });

      it('updates status by order id', function(done){
        agent.put('/api/order/1')
        .send({
          status: 'completed'
        })
        .expect(201)
        .end(function (err, res){
          if(err) return done(err);
          Order.findById(res.body.id)
          .then(function(order){
            expect(order).to.not.be.null;
            expect(order.status).to.be.equal('completed');
            done();
          });
        });
      });

      it('updates session to user by order id', function(done){
        agent.put('/api/order/4')
        .send({
          user: 4,
          userType: 'user'
        })
        .expect(201)
        .end(function (err, res){
          if(err) return done(err);
          Order.findById(res.body.id)
          .then(function(order){
            expect(order).to.not.be.null;
            expect(order.user).to.be.equal(4);
            expect(order.userType).to.be.equal('user');
          })
          .then(function(){
            Order.findAll({
              where: {
                userType: 'session'
              }
            })
            .then(function(orders){
              expect(orders).to.have.length(0);
              done();
            });
          });
        });
      });

      it('adds an item to an order', function(done) {
        agent.put('/api/order/addItem/1/1')
        .expect(201)
        .end(function(err, res) {
          if(err) return done(err);
          Order.findById(res.body.id)
          .then(function(order) {
            expect(order).to.not.be.null;
            order.getItems()
            .then(function(items){
              expect(items).to.not.be.null;
              expect(items).to.have.length(1);
              done();
            });
          });
        });
      });
    });

    describe('POSTs orders', function(){
          var theOrders;
          //create an order instance
          beforeEach(function() {
            var ordArray = [
              {
                user: 1,
                userType: 'user'
              },
              {
                user: 1,
                userType: 'user',
                status: 'completed'
              },
              {
                user: 2,
                userType: 'user'
              },
              {
                user: 1,
                userType: 'session'
              }
            ];

            return Order.bulkCreate(ordArray)
              .then(function(array){
                theOrders = array;
              });
          });
        // it('posts a new order for a session with given id', function(done) {
        //   //
        // })
      });
});
