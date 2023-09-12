const mysql = require("mysql2/promise");

async function query(sql, params) {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "test_data",
    port: 3306,
  });
  const results = await connection.execute(sql, params);
  connection.end();
  return results[0];
}

module.exports = {
  query,
};
