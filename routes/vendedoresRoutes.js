// routes/vendedorRoutes.js

const express = require('express');
const vendedorControllers = require('../controllers/vendedoresControllers');

const router = express.Router();

// Ruta para verificar el inicio de sesión del vendedor
router.post('/login', vendedorControllers.verificarInicioSesionVendedor);

module.exports = router;
