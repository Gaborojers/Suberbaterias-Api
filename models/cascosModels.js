// productoCasco.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const ProductoCasco = sequelize.define('productoCasco', {
    id: {
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
    }
});

module.exports = ProductoCasco;
