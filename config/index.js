const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/todoapp",);
    console.log("Connected to Database");
  } catch (error) {
    console.log(`error while connecting to db`, error);
  }
};


module.exports = connectDB
