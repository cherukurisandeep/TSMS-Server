'use strict';
var bcrypt = require('bcrypt-nodejs'),
SALT_WORK_FACTOR = 10;
module.exports = function(sequelize, DataTypes) {
  var resource = sequelize.define('resource', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email : DataTypes.STRING,
    password : DataTypes.STRING,
    dob : DataTypes.DATE,
    joindate : DataTypes.DATE,
    termdate : DataTypes.DATE,
    role : DataTypes.STRING
  }, {
    tableName : 'resources',
    underscore : true,
    classMethods: {
      associate: function(models) {
        resource.hasMany(models.resource_contact,{
          as :'resource_contacts',
          foreignKey :{
            name :'resource_id',
            allowNull : false
          }
        })
        resource.belongsToMany(models.project,{
          through : "pr_assosiation",
          as : 'projects',
          foreignKey :{
            name :'resource_id',
            allowNull: false
          }
        })
        resource.hasMany(models.timeSheet,{
          as : 'timeSheets',
          foreignKey :{
            name : 'resource_id',
            allowNull : false
          }
        })
        // associations can be defined here
      }
    }
  });
  resource.hook('beforeCreate',function (resource,fn) {
    var salt = bcrypt.genSalt(SALT_WORK_FACTOR, function (err,salt) {
      console.log(salt)
      return salt
    });
    bcrypt.hash(resource.password,salt,null,function (err,hash) {
      if(err)
        return next(err);
        resource.password=hash;
        return fn;
    });
  })
  return resource;
};
