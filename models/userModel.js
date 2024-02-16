const moongose = require("mongoose");

const userSchema = new moongose.Schema(
  {
    role: {
      type: String,
      enum: ["admin", "organization", "user", "hospital"],
    },
    name: {
      type: String,
      require: function () {
        if (this.role === "user" || this.role === "admin") {
          return true;
        }
        return false;
      },
    },
    organizationName: {
      type: String,
      require: function () {
        if (this.role === "organization") {
          return true;
        }
        return false;
      },
    },
    email: {
      type: String,
      require: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "password is required"],
    },
    website: {
      type: String,
    },
    address: {
      type: String,
      require: [true, "address is requred"],
    },
    phone: {
      type: String,
      require: [true, "phone number is required"],
    },
  },
  { timestamps: true }
);

module.exports = moongose.model("user", userSchema);
