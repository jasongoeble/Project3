"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === "index.js"
    );
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require('./users')(sequelize, Sequelize);
db.event = require('./events.js')(sequelize, Sequelize);
db.post = require('./posts.js')(sequelize, Sequelize);
db.profile = require('./profile.js')(sequelize, Sequelize);
db.comment = require('./comments.js')(sequelize, Sequelize);
// db.user_skill = require('./user_skill.js')(sequelize, Sequelize);
db.user_event = require('./user_event.js')(sequelize, Sequelize);
// db.event_skill = require('./event_skill.js')(sequelize, Sequelize);
db.event_post = require('./event_post.js')(sequelize, Sequelize);

//comment-post relationship
db.comment.belongsTo(db.post);
db.post.hasMany(db.comment);
db.comment.belongsTo(db.post);
db.post.hasMany(db.comment);
db.post.belongsTo(db.user);
db.user.hasMany(db.post);
db.user.hasMany(db.comment)
db.comment.belongsTo(db.user);


//user-profile relationship
db.profile.belongsTo(db.user);
//db.user.hasOne(db.profile);

//user-event relationship
db.user_event.belongsTo(db.user);
db.user.hasMany(db.user_event);

//user_event to event relationship
db.user_event.belongsTo(db.event);
db.event.hasMany(db.user_event);

module.exports = db;
//module.exports = sequelize;
