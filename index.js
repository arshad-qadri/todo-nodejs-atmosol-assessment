const express = require("express");
const connectDB = require("./config");
const router = require("./routes");

const app = express();

// connect to database
connectDB();

// middleware 
app.use(express.json())

// api 
app.use("/api",router)

const port = 5000;
app.listen(port, () => {
  console.log("server listening on port " + port);
});
