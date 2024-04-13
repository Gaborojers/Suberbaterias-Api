// productosCascosController.js

const ProductosCascos = require('../models/productoCascosModels');

// Controlador para actualizar la cantidad de cascos
const actualizarCantidadCascos = async (req, res) => {
    const { codigoCascos, cantidadCascos } = req.body;
  
    try {
      // Buscar el producto de cascos por su código
      const productoCascos = await ProductosCascos.findOne({ where: { codigo: codigoCascos } });
  
      if (!productoCascos) {
        return res.status(404).json({ message: 'Producto de cascos no encontrado' });
      }
  
      // Actualizar la cantidad de cascos
      productoCascos.cantidad += cantidadCascos;
      await productoCascos.save();
  
      res.status(200).json({ message: 'Cantidad de cascos actualizada exitosamente' });
    } catch (error) {
      console.error('Error al actualizar la cantidad de cascos:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  };  

module.exports = {
  actualizarCantidadCascos,
};
