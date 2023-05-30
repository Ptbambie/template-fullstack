const mysql = require('mysql2/promise');
require ('dotenv').config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

//console.log(DB_HOST, DB_USER);

const db = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

db.getConnection().catch(() => {
  console.warn(
    "Warning:DB failing",
  );
});

module.exports = db ; 