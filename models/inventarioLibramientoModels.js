// inventarioLibramiento.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const inventarioLibramiento = sequelize.define('inventarioLibramiento', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    baterias: {
        type: DataTypes.JSONB,
        allowNull: false,
        defaultValue: {} // Puedes inicializarlo como un objeto vacío
    },
    motobaterias: {
        type: DataTypes.JSONB,
        allowNull: false,
        defaultValue: {}
    },
    cascos: {
        type: DataTypes.JSONB,
        allowNull: false,
        defaultValue: {}
    }
});

module.exports = inventarioLibramiento;
