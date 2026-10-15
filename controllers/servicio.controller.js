const modeloServicio = require('../models/peluqueria.model');

exports.listar = async (req, res) => {
    try {
        const servicios = await modeloServicio.find();
        console.log(servicios)
        res.json(servicios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.buscar = async (req, res) => {
    try {
        const servicio = await modeloServicio.findOne(
            { "nombre": req.params.nombre }
        );
        if (!servicio) {
            return res.status(404).json({ error: 'Servicio no encontrado' });
        }

        res.json(servicio);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.insertar = async (req, res) => {
    try {
    console.log('entra')
        let servicioNuevo = {
           nombre: req.body.nombre,
           descripcion: req.body.descripcion,
           duracionMinutos: req.body.duracionMinutos,
           precio: req.body.precio,
           categoria: req.body.categoria
       };
        const servicio = await modeloServicio.insertOne(servicioNuevo);

        res.json(servicio);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.update = async (req, res) => {
    try {
        let servicioActualizado = {
           nombre: req.body.nombre,
           descripcion: req.body.descripcion,
           duracionMinutos: req.body.duracionMinutos,
           precio: req.body.precio,
           categoria: req.body.categoria
       };


        const servicio = await modeloServicio.updateOne(
            { nombre: req.params.nombre },
            { $set:servicioActualizado }
        );

        res.json(servicio);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.eliminar = async (req, res) => {
    try {
        const servicios = await modeloServicio.findOneAndDelete({ nombre: req.params.nombre});

        res.json(servicios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}