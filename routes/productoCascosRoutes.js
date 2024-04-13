// routes/productosCascosRoutes.js

const express = require('express');
const router = express.Router();
const productosCascosController = require('../controllers/productoCascosControllers');

// Ruta para actualizar la cantidad de cascos
router.put('/actualizar-cantidad', productosCascosController.actualizarCantidadCascos);

module.exports = router;
