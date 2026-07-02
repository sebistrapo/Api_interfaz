const express = require('express');
const clienteController = require('./controllers/cliente.controller');
const servicioControl = require('./controllers/servicio.controller');





const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const enrutamiento = require('./routes/enrutamiento.router');
app.use('/api/v1', enrutamiento);



app.get('/', clienteController.inicio);


app.get('/servicios', servicioControl.listar);
app.get('/servicios/:nombre', servicioControl.buscar);       
app.post('/servicios', servicioControl.insertar);
app.put('/servicios/:nombre', servicioControl.update);
app.delete('/servicios/:nombre', servicioControl.eliminar);

app.listen(process.env.PORT || 9300, ()=> {
    console.log("Aplicación en línea, ingresa a 5555");
});