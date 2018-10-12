const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));
var db = require("../models");


module.exports = function(sequelize, DataTypes) 
{
    const user = sequelize.define("user", {
        id:
        {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull:true
        },
        fname:
        {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: 
            {
                len: [1,50]
            }
        },
        lname:
        {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: 
            {
                len: [1,50]
            } 
        },
        email:
        {
            type: DataTypes.TEXT,
            allowNull: false,
            notEmpty: true,
            validate:
            {
                isEmail: true
            }
        },
        password: 
        {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true
        },
        created_at: 
        {
            type: DataTypes.DATE,
            allowNull: true
        },
        updated_at: DataTypes.DATE,
        deleted_at: DataTypes.DATE
    },
    {
        underscored: true,
        hooks: 
        {
            beforeCreate: (user) => 
            {
                const salt = bcrypt.genSaltSync();
                user.password = bcrypt.hashSync(user.password, salt);
            }
        }
    })
 
    user.prototype.validatePass = function (userPass, enteredPass, callback) 
    {
        console.log("fuck");
        console.log(userPass + "<db password   usermodel   user entered pass>" + enteredPass);

        return bcrypt.compare(userPass, enteredPass, callback);
    };

return user
}