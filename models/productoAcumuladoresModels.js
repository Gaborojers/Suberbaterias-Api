// productoBateria.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const ProductoAcumulador = sequelize.define('productoAcumulador', {
    id_pAcumulador: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precioLista: {
        type: DataTypes.FLOAT,
        allowNull: false
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

module.exports = ProductoAcumulador;
