'use strict';
module.exports = function(sequelize, DataTypes) {
  var timeSheet = sequelize.define('timeSheet', {
    startdate: DataTypes.DATE,
    enddate: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        timeSheet.belongsTo(models.resource,{
          as : 'resources',
          foreignKey :{
            name : 'resource_id',
            allowNull : false
          }
        })
        // associations can be defined here
      }
    }
  });
  return timeSheet;
};
