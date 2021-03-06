const app = require('APP'), {env} = app
const debug = require('debug')(`${app.name}:auth`)
const passport = require('passport')

const User = require('APP/db/models/user')
const OAuth = require('APP/db/models/oauth')
const auth = require('express').Router()

const epilogue = require('./epilogue')
const db = require('APP/db')



/*************************
 * Auth strategies
 * 
 * The OAuth model knows how to configure Passport middleware.
 * To enable an auth strategy, ensure that the appropriate
 * environment variables are set.
 * 
 * You can do it on the command line:
 * 
 *   FACEBOOK_CLIENT_ID=abcd FACEBOOK_CLIENT_SECRET=1234 npm start
 * 
 * Or, better, you can create a ~/.$your_app_name.env.json file in
 * your home directory, and set them in there:
 * 
 * {
 *   FACEBOOK_CLIENT_ID: 'abcd',
 *   FACEBOOK_CLIENT_SECRET: '1234',
 * }
 * 
 * Concentrating your secrets this way will make it less likely that you
 * accidentally push them to Github, for example.
 * 
 * When you deploy to production, you'll need to set up these environment
 * variables with your hosting provider.
 **/

// Facebook needs the FACEBOOK_CLIENT_ID and FACEBOOK_CLIENT_SECRET
// environment variables.



OAuth.setupStrategy({
  provider: 'facebook',
  strategy: require('passport-facebook').Strategy,
  config: {
    clientID: env.FACEBOOK_CLIENT_ID,
    clientSecret: env.FACEBOOK_CLIENT_SECRET,
    callbackURL: `${app.rootUrl}/api/auth/login/facebook`,
  },
  passport
})

// Google needs the GOOGLE_CONSUMER_SECRET AND GOOGLE_CONSUMER_KEY
// environment variables.
OAuth.setupStrategy({
  provider: 'google',
  strategy: require('passport-google-oauth').Strategy,
  config: {
    consumerKey: env.GOOGLE_CONSUMER_KEY,
    consumerSecret: env.GOOGLE_CONSUMER_SECRET,
    callbackURL: `${app.rootUrl}/api/auth/login/google`,
  },
  passport
})

// Github needs the GITHUB_CLIENT_ID AND GITHUB_CLIENT_SECRET
// environment variables.
OAuth.setupStrategy({
  provider: 'github',
  strategy: require('passport-github2').Strategy,
  config: {
    clientID: env.GITHUB_CLIENT_ID,
    clientSecrets: env.GITHUB_CLIENT_SECRET,
    callbackURL: `${app.rootUrl}/api/auth/login/github`,
  },
  passport
})

// Other passport configuration:
passport.serializeUser((user, done) => {
  debug('will serialize user.id=%d', user.id)
  done(null, user.id)
  debug('did serialize user.id=%d', user.id)
})

passport.deserializeUser(
  (id, done) => {
    debug('will deserialize user.id=%d', id)
    User.findById(id)
      .then(user => {
        console.log("PASSPORT FOUND USER: ", user.name)
        debug('deserialize did ok user.id=%d', user.id)
        done(null, user)
      })
      .catch(err => {
        debug('deserialize did fail err=%s', err)
        done(err)
      })
  }
)

passport.use(new (require('passport-local').Strategy) (
    (email, password, done) => {
      console.log("INSIDE PASSPORT")
      console.log("email: ", email)
      console.log("password: ", password)
      email = email.toLowerCase()
      debug('will authenticate user(email: "%s")', email)
      User.findOne({where: {email}})
        .then(user => {
          console.log("USER: ", user.name)
          if (!user) {
            debug('authenticate user(email: "%s") did fail: no such user', email)
            return done(null, false, { message: 'Login incorrect' })
          }
          return user.authenticate(password)
            .then(ok => {
              if (!ok) {
                debug('authenticate user(email: "%s") did fail: bad password')              
                return done(null, false, { message: 'Login incorrect' })
              }
              debug('authenticate user(email: "%s") did ok: user.id=%d', user.id)
              done(null, user)              
            })
        })
        .catch(done)
    }
  ))

// passport.deserializeUser(
//   (id, done) => {
//     debug('will deserialize user.id=%d', id)
//     User.findById(id)
//       .then(user => {
//         console.log("PASSPORT FOUND USER: ", user.name)
//         debug('deserialize did ok user.id=%d', user.id)
//         done(null, user)
//       })
//       .catch(err => {
//         debug('deserialize did fail err=%s', err)
//         done(err)
//       })
//   }
// )

// passport.use(new (require('passport-local').Strategy) (
//     (email, password, done) => {
//       console.log("INSIDE PASSPORT")
//       console.log("email: ", email)
//       email = email.toLowerCase()
//       debug('will authenticate user(email: "%s")', email)
//       User.findOne({where: {email}})
//         .then(user => {
//           console.log("USER: ", user)
//           if (!user) {
//             debug('authenticate user(email: "%s") did fail: no such user', email)
//             return done(null, false, { message: 'Login incorrect' })
//           }
//           return user.authenticate(password)
//             .then(ok => {
//               if (!ok) {
//                 debug('authenticate user(email: "%s") did fail: bad password')              
//                 return done(null, false, { message: 'Login incorrect' })
//               }
//               debug('authenticate user(email: "%s") did ok: user.id=%d', user.id)
//               done(null, user)              
//             })
//         })
//         .catch(done)
//     }
//   ))


auth.get('/whoami', (req, res, next) => {
  //console.log("REQUEST IN /whoami: ", req.user.name)
  res.send(req.user)
})

// // This works when users come after the /api/auth

// auth.get("/users", function(req, res, next){
//  console.log("in custom REQ.USER: ", req.user.name)
//  if(!req.user || !req.user.isAdmin){
//    res.sendStatus(403)
//    return;
//  }
//  User.findAll({})
//  .then((user) => res.send(user))
//  .catch(next)
// })





auth.post('/:strategy/login', (req, res, next) => {
  console.log("STRATEGY: ", req.params.strategy)
  passport.authenticate(req.params.strategy, {
    successRedirect: '/'
  })(req, res, next)
})

// auth.post('/:strategy/login', (req, res, next) => {
//   console.log("STRATEGY: ", req.params.strategy)
//   passport.authenticate('local-login', function (err, user, info) {
//         if (err) {
//             mysend(res, 500, 'Ups. Something broke!');
//         } else if (info) {
//             mysend(res, 401, 'unauthorized');
//         } else {
//             req.login(user, function(err) {
//                 if (err) {
//                     mysend(res, 500, 'Ups.');
//                 } else {
//                     mysend(res, 200, JSON.stringify(user));
//                 }
//             })
//         }
//     })(req, res, next);
// });


auth.post('/logout', (req, res, next) => {
  req.logout()
  res.redirect('/api/auth/whoami')
})

module.exports = auth 




