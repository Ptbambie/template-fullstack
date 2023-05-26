const mysql = require('mysql2/promise');

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = {
    DB_HOST: 'localhost',
    DB_USER:'root',
    DB_PASSWORD: '',
    DB_NAME: 'wild_db_quest'
};

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