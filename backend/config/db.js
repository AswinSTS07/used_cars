const mongoose = require("mongoose");
const dbUrl =
  process.env.DB_URL || "mongodb+srv://aswinsts07:rDoUKThjDr5nbBaR@cluster0.vr9wg6u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.set("strictQuery", true);

module.exports.connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(dbUrl);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};