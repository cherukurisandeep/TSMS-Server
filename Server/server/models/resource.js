'use strict';
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
          through : "pr_association",
          as : 'projects',
          foreignKey :{
            name :'resource_id',
            allowNull: false
          }
        })
        // associations can be defined here
      }
    }
  });
  return resource;
};
