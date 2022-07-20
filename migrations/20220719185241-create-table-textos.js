'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('textos', {
      id: { 
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true   
      },
      titulo: { 
        type: DataTypes.STRING,
      },
      autora: { 
        type: DataTypes.STRING,
  
      },
      categoria: { 
        type: DataTypes.STRING,
  
      },
      data: {
        type: DataTypes.DATE,
      },
      texto: {
        type: DataTypes.TEXT('long')
      },
      }, 
      {
        tableName: 'textos'
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('textos');
  }
};
