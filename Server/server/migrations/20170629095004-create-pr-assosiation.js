'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('pr_assosiations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      project_id: {
        type: Sequelize.INTEGER,
        onDelete : 'CASCADE',
        references :{
          model : 'projects',
          key : 'id'
        }
      },
      resource_id :{
        type :Sequelize.INTEGER,
        onDelete : 'CASCADE',
        references :{
          model : 'resources',
          key : 'id'
        }
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
    return queryInterface.dropTable('pr_assosiations');
  }
};
