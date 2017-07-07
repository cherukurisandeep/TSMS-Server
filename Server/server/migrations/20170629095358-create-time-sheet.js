'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('timeSheets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      resource_id:{
        type: Sequelize.INTEGER,
        references :{
          model : 'resources',
          key : 'id'
        },
        allowNull : false,
        onDelete : 'CASCADE'
      },
      startdate: {
        type: Sequelize.DATE
      },
      enddate: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('timeSheets');
  }
};
