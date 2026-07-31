const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente.controller');
const usuarioController = require('../controllers/usuario.controller');

router.get('/cliente-form', clienteController.clienteForm);
router.get('/user-form', usuarioController.usuarioForm);

router.get('/clientes', clienteController.listar);
router.get('/cliente/:telefono', clienteController.buscar);
router.post('/clientes', clienteController.insertar);
router.put('/clientes/:telefono', clienteController.update);
router.delete('/clientes/:telefono', clienteController.eliminar);

router.get('/usuarios', usuarioController.listar);
// router.get('/cliente/:telefono', usuarioController.buscar);
router.post('/usuarios', usuarioController.insertar);
// router.put('/clientes/:telefono', usuarioController.update);
// router.delete('/clientes/:telefono', usuarioController.eliminar);

router.get('/contacto', usuarioController.contacto);

router.post('/email-adress', usuarioController.enviaCorreo);

router.get('/productos', clienteController.productos);


module.exports = router;