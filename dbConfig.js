import mongoose from "mongoose";

const mongoUrl = "mongodb://localhost:27017/online_ntdl";

export const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(mongoUrl);
    conn && console.log("DB Connected");
  } catch (error) {
    console.log(error);
  }
};
