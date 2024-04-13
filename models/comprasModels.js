// compra.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Compra = sequelize.define('compra', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    administradorId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    proveedor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    productoId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

module.exports = Compra;
