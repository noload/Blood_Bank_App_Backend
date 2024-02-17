const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema(
  {
    inventoryType: {
      type: String,
      require: [true, "Inventory type is required"],
      enum: ["in", "out"],
    },
    bloodGroup: {
      type: String,
      require: [true, "Blood group is required"],
      enum: ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"],
    },
    quantity: {
      type: Number,
      require: [true, "Blood  quantity is required"],
    },
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      require: [true, "Organization is required"],
    },
    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      require: function () {
        return this.inventoryType == "out";
      },
    },
    donar: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      require: function () {
        return this.inventoryType === "in";
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("inventory", inventorySchema);
