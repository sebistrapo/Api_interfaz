const mongoose = require('../config/connectionDB');

const clienteSchema = new mongoose.Schema({

    
    nombre: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    telefono: {
        type: String,
        required: true,
        unique: true
    }

});

module.exports = mongoose.model('clientes', clienteSchema);