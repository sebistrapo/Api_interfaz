const modeloCliente = require('../models/cliente.model');
const logger = require('../services/log');

exports.inicio = async (req, res) => {
    try {
        res.render('pages/inicio');
    } catch {
        console.log("Error");
    }
}

exports.clienteForm = async (req, res) => {
    try {
    res.render('pages/cliente-form');
    } catch {
        console.log("Error");
    }
}

exports.listar = async (req, res) => {
    try {
        const clientes = await modeloCliente.find();

        res.render('pages/lista', {clientes:clientes});

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.buscar = async (req, res) => {
    try {

        const clientes = await modeloCliente.findOne(
            { "telefono": req.params.telefono }
        );
        if (!clientes) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }

        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.insertar = async (req, res) => {
    console.log("Entra");
    try {
        let clienteNuevo = {
           nombre: req.body.nombre,
           email: req.body.email,
           telefono: req.body.telefono
       };

       console.log(clienteNuevo);
       
        const clientes = await modeloCliente.insertOne(clienteNuevo);
        logger.escribirLog('Nuevo usuario Insertado', req.body.nombre)

        res.redirect('/api/v1/clientes');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.update = async (req, res) => {
    try {
        let clienteActualizado = {
           nombre: req.body.nombre,
           email: req.body.email,
           telefono: req.body.telefono
       };


        const cliente = await modeloCliente.updateOne(
            { "telefono": req.params.telefono },
            { $set:clienteActualizado }
        );

        logger.escribirLog('Ha sido Actualizado', req.body.nombre)

        res.redirect('/api/v1/clientes');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.eliminar = async (req, res) => {
    try {
        const cliente = await modeloCliente.findOneAndDelete({ telefono: req.params.telefono});

        logger.escribirLog('Ha sido Eliminado', cliente.nombre)

        res.redirect('/api/v1/clientes');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.productos = async (req, res) => {
    try {
        res.render('pages/productos');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}