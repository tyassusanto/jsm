// require('dotenv').config()
const mysql = require('mysql2')
const connection = mysql.createConnection({
    host : 'localhost', 
    user : 'root',
    password : '8karakteR#',
    database : 'jsm'
})

module.exports = connection