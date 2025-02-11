"use strict";

/** @type {import('sequelize-cli').Migration} */
const { Op } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Airplanes", [
      {
        modelNo: "A380",
        capacity: 900,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNo: "Boeing737",
        capacity: 600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Airplanes", {
      [Op.or]: [{ modelNo: "A380" }, { modelNo: "Boeing737" }],
    });
  },
};
