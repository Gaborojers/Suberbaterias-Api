// venta.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const VentasAcumuladores = sequelize.define('ventasacumuladores', {
    id_venta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    id_acumulador: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'productoacumuladors', // Nombre de la tabla referenciada
            key: 'id_pAcumulador'          // Nombre de la columna referenciada
          }
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precio_unit_sug: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    descuento: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    precio_unit_real: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    monto_total: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    id_vendedor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'vendedors', // Nombre de la tabla referenciada
            key: 'id_vendedor'          // Nombre de la columna referenciada
          }
    }
}, {
    timestamps: false // Deshabilitar la creación automática de createdAt y updatedAt
  });

module.exports = VentasAcumuladores;
