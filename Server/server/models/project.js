'use strict';
module.exports = function(sequelize, DataTypes) {
  var project = sequelize.define('project', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    startdate: DataTypes.DATE,
    enddate: DataTypes.DATE
  }, {
    tableName : 'projects',
    underscore : true,
    classMethods: {
      associate: function(models) {
        project.belongsToMany(models.resource,{
          through: "pr_assosiation",
          as : "resources",
          foreignKey :{
            name : 'project_id',
            allowNull : false
          }
        })
        project.hasMany(models.timeSheetEntery,{
          as : "timeSheetEntery",
          foreignKey :{
            name : 'project_id',
            allowNull: true
          }
        })

        // associations can be defined here
      }
    }
  });
  return project;
};
