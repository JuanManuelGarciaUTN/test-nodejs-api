const process = require('process');
require('dotenv').config();
const mysql = require('mysql2');


module.exports = mysql.createConnection(process.env.DATABASE_URL);
