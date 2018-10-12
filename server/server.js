require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
const passport = require('passport');
const config = require('./config/config.json');

// var exphbs = require("express-handlebars");           

var db = require("./models");
var app = express();
var PORT = process.env.PORT || 5000;
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
// pass the passport middleware

app.use(passport.initialize());
// load passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./middleware/auth-check');
app.use('/api', authCheckMiddleware);

// Routes

const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

require("./routes/apiRoutes.js")(app);
// require("./routes/htmlRoutes.js")(app);
var syncOptions = { force: false };
// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
 syncOptions.force = true;
}
// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
    // db.User.create({email:"admin@aol.com", password:"admin"});
 app.listen(PORT, function() {
  console.log(
   "==> 🌎 Listening on port %s. Visit http://localhost:%s/ in your browser.",
   PORT,
   PORT
  );
 });
});
module.exports = app;