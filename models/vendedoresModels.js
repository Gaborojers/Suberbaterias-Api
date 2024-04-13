// vendedor.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Vendedor = sequelize.define('vendedor', {
    id_vendedor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombres: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidoP: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidoM: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numeroTelefono: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Vendedor;
