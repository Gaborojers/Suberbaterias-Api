// routes.js
const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventasAcumuladoresController');

router.post('/ventas', ventaController.guardarVenta);

module.exports = router;
