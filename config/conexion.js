const sql = require('mysql2');

let conexion = sql.createConnection({
    host: 'localhost',
    database: 'atencion_medica_martens',
    user: 'root',
    password: ''
})

conexion.connect(function(err) {
    if (err) {
        throw err;
    } else {
        console.log('connection established');
    }
});

module.exports = conexion;