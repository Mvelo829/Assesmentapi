const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'monorail.proxy.rlwy.net',
    user: 'root',
    password: 'nxdPpIkCipQjqpCSDNjCTVpZxmTfUDvc',
    database: 'railway',
    port: 30597
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database as ID', db.threadId);
});

module.exports = db;
