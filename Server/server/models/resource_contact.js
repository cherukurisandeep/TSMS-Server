'use strict';
module.exports = function(sequelize, DataTypes) {
  var resource_contact = sequelize.define('resource_contact', {
    contact_type: DataTypes.STRING,
    contact: DataTypes.STRING
  }, {
    tableName : 'resource_contacts',
    underscore : true,
    classMethods: {
      associate: function(models) {
      resource_contact.belongsTo(models.resource,{
        as: 'resources',
        foreignKey :{
          name : 'resource_id',
          allowNull : false
        }
      })
        // associations can be defined here
      }
    }
  });
  return resource_contact;
};
