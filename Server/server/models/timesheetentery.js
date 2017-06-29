'use strict';
module.exports = function(sequelize, DataTypes) {
  var timeSheetEntery = sequelize.define('timeSheetEntery', {
    time_date: DataTypes.DATE,
    hours: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        timeSheetEntery.belongsTo(models.pr_assosiation,{
          as : 'pr_assosiation',
          foreignKey :{
            name : "pr_id",
            allowNull : false
          }
        })
        timeSheetEntery.hasMany(models.timeSheet,{
          as : 'timeSheets',
          foreignKey :{
            name : "t_id",
            allowNull: false
          }
        })
        // associations can be defined here
      }
    }
  });
  return timeSheetEntery;
};
