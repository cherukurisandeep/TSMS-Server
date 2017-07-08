'use strict';
module.exports = function(sequelize, DataTypes) {
  var timeSheetEntery = sequelize.define('timeSheetEntery', {
    time_date: DataTypes.DATE,
    hours: DataTypes.INTEGER
  }, {
    tableName : 'timeSheetEnteries',
    underscore : true,
    classMethods: {
      associate: function(models) {
        timeSheetEntery.belongsTo(models.project,{
          as : 'projects',
          foreignKey :{
            name : "project_id",
            allowNull : true
          }
        });
        timeSheetEntery.belongsTo(models.timeSheet,{
          as : 'timeSheets',
          foreignKey : "timesheetId",
          targetKey : "id"
        });
        // associations can be defined here
      }
    }
  });
  return timeSheetEntery;
};
