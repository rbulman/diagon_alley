const app = require('APP'), {env} = app
const debug = require('debug')(`${app.name}:auth`)
const passport = require('passport')

const User = require('APP/db/models/user')
const OAuth = require('APP/db/models/oauth')
const init = require('express').Router()



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
      email = email.toLowerCase()
      debug('will authenticate user(email: "%s")', email)
      User.findOne({where: {email}})
        .then(user => {
          console.log("USER: ", user.id)
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

module.exports = init