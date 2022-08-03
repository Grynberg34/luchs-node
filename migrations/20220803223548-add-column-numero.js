'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    queryInterface.addColumn('textos','numero', {
      type: DataTypes.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('textos', 'numero');
  }
};