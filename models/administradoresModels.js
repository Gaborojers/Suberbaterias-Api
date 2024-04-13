// administrador.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Administrador = sequelize.define('administrador', {
    id_admin: {
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
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numeroTelefono: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Administrador;
