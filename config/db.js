const mongoose = require("mongoose");
const { DB_URL } = require("./serverConfig");
const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log(`connected to mongoDB successfully`);
  } catch (error) {
    console.log("mongo DB error", error);
  }
};

module.exports = connectDB;
