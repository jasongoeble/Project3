const user = require("../models/users.js");
const PassportLocalStrategy = require('passport-local').Strategy;
var db = require("../models");

/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  console.log("hello from passlocal")
  console.log(email+ "hello world")


  const userData = {
    email: email,
    password: password,
  };

  //swapped the following 6 lines of code for the further below
  //user create statement to also create a record for the user profile
  // db.user.create(
  //   {
  //   // fname: req.body.fname,
  //   // lname: req.body.lname,
  //   email: req.body.email,
  //   password: req.body.password
  //   });
  
    db.user.create(
      {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password
      })
      .then(function (dbuser) 
      {
        //captures the newly created user_id
        let new_user_id = dbuser.id;

        //creates a profile that is null except for user_id
        db.profile.create(
          {
            user_id: new_user_id
          }
        )
      });




});




