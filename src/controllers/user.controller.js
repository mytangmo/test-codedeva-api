const e = require("express");
const { response } = require("express");
const userModel = require("../models/user.model");
const { authenticate } = require("../services/auth.service");

const login = async (req, res, next) => {
  const { headers, body } = req;
  const pass = body.Password;
  const email = body.Email;
  // console.log(email);
  try {
    if (email && pass) {
      const auth = await authenticate(email, pass);
      // console.log(auth);
      const result = auth.data;

      res.status(200).json({ success: true, message: "success", data: result });
    }
  } catch (err) {
    next(err);
  }
};

const logout = (req, res) => {
  res.send("Controller Logout");
};

const getAll = async (req, res, next) => {
  try {
    const result = await userModel.getAll();
    res.status(200).json({ success: true, message: "success", data: result });
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  const { headers, body } = req;
  let model = body;
  try {
    const findEmailExist = await userModel.findUserDbByEmail(body.Email);
    if (findEmailExist) {
      throw new Error('อีเมลนี้มีอยู่แล้ว');
    }

    const findPhoneExist = await userModel.findTelephone(body.Telephone);
    if (findPhoneExist) {
      throw new Error('เบอร์โทรศัพท์นี้มีอยู่แล้ว');
    }
    const result = await userModel.create(model);
    res.status(200).json({ success: true, message: "success", data: { id: result.insertId } });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
  logout,
  getAll,
  create
};
