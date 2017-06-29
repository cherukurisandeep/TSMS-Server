'use strict';
module.exports = function(sequelize, DataTypes) {
  var timeSheet = sequelize.define('timeSheet', {
    startdate: DataTypes.DATE,
    enddate: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        timeSheet.belongsTo(models.timeSheetEntery,{
          as : 'timeSheetEnteries',
          foreignKey :{
            name : 't_id',
            allowNull : false
          }
        })
        // associations can be defined here
      }
    }
  });
  return timeSheet;
};
