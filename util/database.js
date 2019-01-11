const mysql = require('mysql2');

const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'my_story',
    password: 'shymma2013'
})

module.exports = pool.promise()