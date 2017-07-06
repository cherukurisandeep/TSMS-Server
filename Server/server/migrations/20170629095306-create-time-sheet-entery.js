'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('timeSheetEnteries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      project_id :{
        type : Sequelize.INTEGER,
        allowNull :false,
        references :{
          model : 'project',
          key : 'id'
        },
        onDelete : 'CASCADE'
      },
      t_id:{
        type: Sequelize.INTEGER,
        allowNull : false,
        references:{
          model : 'timesheet',
          key   : 'id'
        },
        onDelete:'CASCADE'
      },
      time_date: {
        type: Sequelize.DATE
      },
      hours: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('timeSheetEnteries');
  }
};
