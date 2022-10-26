import mongoose from "mongoose";

const connectDB = async (url) => {
  await mongoose.connect(url);
  console.log("base de datos conectada");
};

export default connectDB;
