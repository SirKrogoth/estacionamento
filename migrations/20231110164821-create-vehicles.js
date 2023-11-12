'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('vehicles', {
      id: {
        type: Sequelize.DataTypes.STRING(255),
        primaryKey: true,
        autoIncrement: false,
        allowNull: false
      },
      placa: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
      },
      marca: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
      },
      modelo: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
      },
      cor: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('vehicles');
  }
};
