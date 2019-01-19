const sql = require('mysql');

module.exports = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "employeeDB",
    multipleStatements: true}
);