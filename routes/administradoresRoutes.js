// routes/vendedorRoutes.js

const express = require('express');
const administradorControllers = require('../controllers/administradoresControllers');

const router = express.Router();

// Ruta para verificar el inicio de sesión del vendedor
router.post('/login', administradorControllers.verificarInicioSesionAdministrador);

module.exports = router;
