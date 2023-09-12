const sql = require("./db");
// const user = require("./user").default;
const moment = require("moment");

const create = async (model) => {
  console.log(model);
  let query = `INSERT INTO users (Username, Password, FirstName, LastName, Telephone, Email, Gender, BirthDay, IsActive, IsDelete) 
    VALUES ('${model.Username}','${model.Password}','${model.FirstName}', '${model.LastName}', '${model.Telephone}','${model.Email}',
    '${model.Gender}','${model.BirthDay}',${model.IsActive}, 0)`;
    console.log(query)
  const result = await sql.query(query);
  return result;
};

const findUserDbByEmail = async (email) => {
  const rows = `SELECT * FROM users WHERE Email = '${email}' and IsDelete = 0 and IsActive = 1`;
  const result = await sql.query(rows);
  if (result.length) {
    return result[0];
  } else return null;
};

const findTelephone = async (phone) => {
  const rows = `SELECT * FROM users WHERE Telephone = '${phone}' and IsDelete = 0 and IsActive = 1`;
  const result = await sql.query(rows);
  if (result.length ) {
    return result[0];
  } else return null;
};

const getAll = async () => {
  let row = `SELECT * FROM users WHERE IsDelete = 0 and IsActive = 1`;
  const result = await sql.query(row);
  //   console.log(result);
  return result;
};
module.exports = {
  create,
  findUserDbByEmail,
  getAll,
  findTelephone,
};
