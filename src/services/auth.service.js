// const userService = require("./userService");
const userModel = require("../models/user.model");

const authenticate = async (email, password) => {
  const data = await userModel.findUserDbByEmail(email);
  if (!data) {
    throw new Error("อีเมลไม่ถูกต้อง");
  }

  console.log("data.Password", typeof data.Password);
  console.log("pass", typeof password);
  const validatePass = (data.Password == password ? true : false);
  // console.log('validatePass', validatePass);

  if (validatePass == false) {
    throw new Error("รหัสผ่านไม่ถูกต้อง");
  }
  let reult = {
    data: data,
    auth: password,
  };
  return reult;
};

module.exports = { authenticate };
