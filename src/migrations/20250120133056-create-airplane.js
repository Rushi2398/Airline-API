"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Airplanes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      modelNo: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          isAlphanumeric: true,
        },
      },
      capacity: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
        validate: {
          max: 1000,
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Airplanes");
  },
};
