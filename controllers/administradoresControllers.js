const Administrador = require('../models/administradoresModels');

// Función para verificar el inicio de sesión del vendedor
const verificarInicioSesionAdministrador = async (req, res) => {
    const { correo, password } = req.body;

    try {
        const administrador = await Administrador.findOne({
            where: { correo },
            attributes: ['id_admin', 'nombres', 'apellidoP', 'apellidoM', 'correo', 'password', 'numeroTelefono']
        });

        if (!administrador) {
            return res.status(404).json({ mensaje: 'Correo electrónico no encontrado' });
        }

        // Comparar la contraseña proporcionada con la almacenada en la base de datos
        if (administrador.contraseña !== password) { // Comparación simple de contraseñas
            return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
        }

        // Inicio de sesión exitoso
        return res.status(200).json({ mensaje: 'Inicio de sesión exitoso' });
    } catch (error) {
        console.error('Error al verificar inicio de sesión del administrador:', error);
        return res.status(500).json({ mensaje: 'Error interno del servidor' });
    } 
};

module.exports = { verificarInicioSesionAdministrador };
