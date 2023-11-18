import mongoose from "mongoose";

const db_url = process.env.MONGODB_CONNECT_URL;

const db_connector = async () => {
  try {
    await mongoose.connect(db_url);
  } catch (error) {
    console.log("Database Connection failed");
  }
};

export default db_connector;
