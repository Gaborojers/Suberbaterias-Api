// productoCasco.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const ProductoCasco = sequelize.define('productocascos', {
    id_pCascos: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    grupo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    costo: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    concepto: {
        type: DataTypes.STRING
    },
    peso: {
        type: DataTypes.FLOAT
    },
    medida: {
        type: DataTypes.FLOAT
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fechaModificacion: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    timestamps: false // Deshabilitar la creación automática de createdAt y updatedAt
  });

module.exports = ProductoCasco;
