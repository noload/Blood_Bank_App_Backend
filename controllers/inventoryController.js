const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");

const createInventoryController = async (req, res) => {
  try {
    const { email, inventoryType } = req.body;
    const user = userModel.findOne({ email });

    if (!user) {
      throw new Error("User Not Found");
    }
    // if (inventoryType === "in" && user.role !== "donar") {
    //   throw new Error("Not a donar account");
    // }
    if (inventoryType === "out" && user.role !== "hospital") {
      throw new Error("Not a Hospital");
    }
    const inventory = new inventoryModel(req.body);
    await inventory.save();

    return res.status(200).send({
      success: true,
      message: "New Blood Record added",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in creating inventory",
      error: error.message,
    });
  }
};

module.exports = { createInventoryController };
