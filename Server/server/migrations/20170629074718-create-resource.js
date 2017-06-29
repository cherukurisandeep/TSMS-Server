'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('resources', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      email :{
        type: Sequelize.STRING,
        unique :true
      },
      password :{
        type:Sequelize.STRING
      },
      dob :{
        type :Sequelize.DATE

      },
      joindate :{
        type : Sequelize.DATE
      },
      termdate :{
        type: Sequelize.DATE
      },
      role : {
        type :Sequelize.STRING
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
    return queryInterface.dropTable('resources');
  }
};
