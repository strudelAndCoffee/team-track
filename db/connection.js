const mysql = require("mysql2");

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "foxtones",
        database: "employees"
    },
    console.log("Connecting to the employees database...")
);

module.exports = db;