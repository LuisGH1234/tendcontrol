const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createPool({
    host: 'localhost',
  user: 'root',
  database: 'tend',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default connection;