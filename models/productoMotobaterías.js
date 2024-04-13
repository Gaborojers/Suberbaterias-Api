// productoMotobateria.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const ProductoMotobateria = sequelize.define('productoMotobateria', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    linea: {
        type: DataTypes.STRING,
        allowNull: false
    },
    articulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precioLista: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

module.exports = ProductoMotobateria;
