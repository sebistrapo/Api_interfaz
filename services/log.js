const fs = require('fs')

exports.leerLogs = async () => {
    fs.readFile('logger.log', 'utf-8', (error, data) => {
        if (error) {
            console.error('Error al leer el archivo:', error.message);
            return;
        }
        console.log('\nLogger.log:')
        console.log(data);
    });
}

exports.escribirLog = async (action, user) => {
//   const timestamp = new Date().toISOString();

    let mensaje = `${new Date().toISOString()} - ${user} - ${action}\n`

  // appendFile agrega texto al final del archivo
  fs.appendFile('logger.log', mensaje, 'utf-8', (error) => {
    if (error) {
      console.error('Error al escribir el log:', error.message);
      return;
    }

    console.log('Log registrado correctamente.');
  });
}