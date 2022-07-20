const connection = require('../config/database');
const { DataTypes } = require('sequelize');

const Texto = connection.define('Texto', {
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
},{
  tableName: 'textos'
});

module.exports = Texto;
