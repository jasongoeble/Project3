const jwt = require('jsonwebtoken');
const user = require("../models/users.js");
const PassportLocalStrategy = require('passport-local').Strategy;
const config = require('../config/config.json');
var db = require("../models");
// const Promise = require('bluebird');
// const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));
// const bcrypt = require("bcrypt-nodejs");
var userPass = "";


/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim()
  };

  return db.user.findOne(
    {
      where: { email: userData.email }
    })
    .then(function (user) {
      console.log(userData.password + " " + userData.email);
      userPass = userData.password;
      console.log(user.dataValues.password);
      dataPass = user.dataValues.password;

      // if (!User) {
      //   const error = new Error('Incorrect email or password');
      //   error.name = 'IncorrectCredentialsError';
      //   console.log("no user")


      //   return done(error);
      // }


      return db.user.build().validatePass(userData.password, dataPass, (err, result) => {
        console.log(err);
        console.log(result);
        if (result == true) {
          console.log("Checked password, match.");
        }
        else if (!result) {
          console.log("no match");
          return done(err);


        }




        const payload = {
          sub: user._id
        };

        // create a token string
        // const token = jwt.sign(payload, config.jwtSecret);
        const token = user.dataValues.id

        const data = {
          email: user.dataValues.email,
          id: user.dataValues.id
        }
        console.log(data);
        return done(null, token, data);

      });
    });
});

  // find a user by email address


    // check if a hashed user's password is equal to a value saved in the database


