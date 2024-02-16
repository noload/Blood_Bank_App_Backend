const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
//rest Object

//mongoDB connection
connectDB();
const app = express();

//routes
app.use("/api/v1/auth", require("./routes/authRoutes"));
//port
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`server started on port 8080`);
});
