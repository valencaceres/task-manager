import mongoose from "mongoose";
import config from "./config";

const pool = async (): Promise<void> => {
  const uri = config.connection;

  try {
    await mongoose.connect(uri);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1)
  }
};

export default pool;