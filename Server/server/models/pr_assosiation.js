'use strict';
module.exports = function(sequelize, DataTypes) {
  var pr_assosiation = sequelize.define('pr_association', {
  }, {
    tableName :"pr_assosiations",
    underscore : true,
    classMethods: {
      associate: models => {
        pr_assosiation.belongsTo(models.project,{
          as:'projects',
          foreignKey :{
            name : "project_id",
            allowNull : false
          },
          onDelete: "CASCADE"
        });
        pr_assosiation.belongsTo(models.resource,{
          as :"resources",
          foreignKey:{
            name : "resource_id",
            allowNull: false
          },
          onDelete: "CASCADE"
        })
        pr_assosiation.hasMany(models.timeSheetEntery,{
          as : "timeSheetEnteries",
          foreignKey :{
            name : 'pr_id',
            allowNull : false
          }

        })

        // associations can be defined here
      }
    }
  });
  return pr_assosiation;
};
