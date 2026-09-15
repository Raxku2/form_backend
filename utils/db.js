import { MongoClient } from "mongodb";
import "dotenv/config";

const client = new MongoClient(process.env.MONGODB_URI);
let db;

export const connectDB = async () => {
  if (!db) {
    await client.connect();
    console.log("connected to mongo db");
    db = client.db("form");
  }
  return;
};

export const saveFormDB = async (data) => {
  const coll = db.collection("Registration");

  const result = await coll.insertOne(data);
  return result;
};

export const readFormDB = async (data) => {
  const coll = db.collection("Registration");

  const result = await coll.find().toArray();
  return result;
};
