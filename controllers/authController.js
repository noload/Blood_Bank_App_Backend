const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const registerController = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });
    //validation
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User Already Exist",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req, body.password, salt);
    req.body.password = hashPassword;
    const user = new userModel(req.body);
    await user.save();
    return res.status(200).send({
      success: true,
      message: "User Registed Succeesfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in register api",
      error,
    });
  }
};

module.exports = {
  registerController,
};
