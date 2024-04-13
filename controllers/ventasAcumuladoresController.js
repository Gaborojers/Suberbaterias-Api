// ventaController.js
const VentasAcumuladores = require('../models/ventasAcumuladoresModels');

const guardarVenta = async (req, res) => {
  try {
    const { id_acumulador, cantidad, precio_unit_sug, descuento, precio_unit_real, monto_total, id_vendedor } = req.body;
    const nuevaVenta = await VentasAcumuladores.create({
      id_acumulador,
      cantidad,
      precio_unit_sug,
      descuento,
      precio_unit_real,
      monto_total,
      id_vendedor
    });
    res.status(201).json(nuevaVenta);
  } catch (error) {
    console.error('Error al guardar la venta:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = {
  guardarVenta
};
