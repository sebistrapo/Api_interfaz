const modeloUsuario = require('../models/usuario.model');
const servicesEmail = require('../services/email.service');

exports.contacto = async (req, res) => {
    try {
        res.render('pages/contacto');
    } catch {
        console.log("Error");
    }
}

exports.usuarioForm = async (req, res) => {
    try {
    res.render('pages/user-form');
    } catch {
        console.log("Error");
    }
}

exports.listar = async (req, res) => {
    try {
        const usuarios = await modeloUsuario.find();

        res.render('pages/listaU', {usuarios:usuarios});

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// exports.buscar = async (req, res) => {
//     try {

//         const clientes = await modeloCliente.findOne(
//             { "telefono": req.params.telefono }
//         );
//         if (!clientes) {
//             return res.status(404).json({ error: 'Cliente no encontrado' });
//         }

//         res.json(clientes);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }

exports.insertar = async (req, res) => {
    try {
        let usuarioNuevo = {
           email: req.body.email,
           password: req.body.password,
           rol: req.body.rol
       };

       
        const usuario = await modeloUsuario.insertOne(usuarioNuevo);

        res.redirect('/api/v1/usuarios');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// exports.update = async (req, res) => {
//     try {
//         let clienteActualizado = {
//            nombre: req.body.nombre,
//            email: req.body.email,
//            telefono: req.body.telefono
//        };


//         const cliente = await modeloCliente.updateOne(
//             { "telefono": req.params.telefono },
//             { $set:clienteActualizado }
//         );

//         res.redirect('/api/v1/clientes');
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }

// exports.eliminar = async (req, res) => {
//     try {
//         const cliente = await modeloCliente.findOneAndDelete({ telefono: req.params.telefono});

//         res.redirect('/api/v1/clientes');
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }

exports.enviaCorreo = async (req, res) => {
    try {
        const asunto = req.body.subject;
        const texto = req.body.text;
        await servicesEmail.sendEmail(asunto, texto);
        console.log("Correo enviado correctamente");
        res.redirect('/api/v1/contacto');
    } catch {
        console.log("Error");
    }
}