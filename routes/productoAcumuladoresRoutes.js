const express = require('express');
const router = express.Router();
const productoAcumuladoresController = require('../controllers/productoAcumuladoresControllers');

// Ruta para buscar un producto por código
router.get('/buscar', productoAcumuladoresController.buscarProductoPorCodigo);

// Ruta para realizar una venta
router.put('/realizar-venta', productoAcumuladoresController.realizarVenta);

module.exports = router;
