'use strict';
module.exports = function(sequelize, DataTypes) {
  var timeSheet = sequelize.define('timeSheet', {
    startdate: DataTypes.DATE,
    enddate: DataTypes.DATE
  }, {
    tableName : 'timeSheets',
    underscore : true,
    classMethods: {
      associate: function(models) {
        timeSheet.belongsTo(models.resource,{
          as : 'resources',
          foreignKey :{
            name : 'resource_id',
            allowNull : false
          }
        })
        timeSheet.hasMany(models.timeSheetEntery,{
          as :'timeSheetEnteries',
          foreignKey : 'timesheetId',
          sourceKey : 'id'
        })
        // associations can be defined here
      }
    }
  });
  return timeSheet;
};
