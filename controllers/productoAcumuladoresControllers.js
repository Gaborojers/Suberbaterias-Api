const ProductoAcumulador = require('../models/productoAcumuladoresModels');

// Controlador para buscar un producto por su código
const buscarProductoPorCodigo = async (req, res) => {
  const { codigo } = req.query; 

  try {
    // Buscar el producto en la base de datos por su código
    const producto = await ProductoAcumulador.findOne({ 
        where: { codigo },
        attributes: ['id_pAcumulador', 'codigo', 'precioLista', 'cantidad', 'fechaModificacion'] 
    });

    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    // Si se encuentra el producto, enviarlo como respuesta
    res.status(200).json(producto);
  } catch (error) {
    console.error('Error al buscar producto por código:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const realizarVenta = async (req, res) => {
  const { id_pAcumulador, cantidadVendida } = req.body;

  try {
    // Buscar el producto en la base de datos por su ID
    const producto = await ProductoAcumulador.findByPk(id_pAcumulador);

    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    // Verificar si hay suficiente cantidad disponible para la venta
    if (cantidadVendida > producto.cantidad) {
      return res.status(400).json({ message: 'No hay suficiente cantidad disponible para realizar esta venta' });
    }

    // Actualizar la cantidad de productos en la tabla productoAcumuladores
    const nuevaCantidad = producto.cantidad - cantidadVendida;
    await producto.update({ cantidad: nuevaCantidad, fechaModificacion: new Date() });

    // Enviar una respuesta de éxito
    res.status(200).json({ message: 'Venta realizada con éxito' });
  } catch (error) {
    console.error('Error al realizar la venta:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = { buscarProductoPorCodigo, realizarVenta };
