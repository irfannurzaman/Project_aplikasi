var mysql = require ('mysql')

const db = mysql.createConnection({
    user: 'root',
    password: 'qwerty12345',
    database: 'data_aplkasi',
    host: '127.0.0.1',
    port: '3306'
})
module.exports = db