const Vendedor = require('../models/vendedoresModels');

// Función para verificar el inicio de sesión del vendedor
const verificarInicioSesionVendedor = async (req, res) => {
    const { correo, contraseña } = req.body;

    try {
        const vendedor = await Vendedor.findOne({
            where: { correo },
            attributes: ['id_vendedor', 'nombres', 'apellidoP', 'apellidoM', 'correo', 'password', 'numeroTelefono']
        });

        if (!vendedor) {
            return res.status(404).json({ mensaje: 'Correo electrónico no encontrado' });
        }

        // Comparar la contraseña proporcionada con la almacenada en la base de datos
        if (vendedor.password !== contraseña) { // Comparación simple de contraseñas
            return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
        }

        // Inicio de sesión exitoso
        return res.status(200).json({ mensaje: 'Inicio de sesión exitoso', vendedor });
    } catch (error) {
        console.error('Error al verificar inicio de sesión del vendedor:', error);
        return res.status(500).json({ mensaje: 'Error interno del servidor' });
    } 
};

module.exports = { verificarInicioSesionVendedor };
