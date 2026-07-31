const mongoose = require('../config/connectionDB');

const userSchema = new mongoose.Schema({

    
    email: {
       type: String,
       required: [true,'El correo es obligatorio'],
       unique: [true, 'El correo debe ser unico']
   },

    password: {
        type: String,
        trim: true,
        minLength: [7, 'Ingresaste una contraseña muy corta']
    },
    rol: {
        type: String,
        enum : ['cliente', 'empleado', 'administrador', 'invitado']
    }

});

module.exports = mongoose.model('usuarios', userSchema);