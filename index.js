import express from "express";
import cors from "cors";
import { formRouter } from "./routes/form.js";
import "dotenv/config";
import { connectDB } from "./utils/db.js";
import { imageKitRouter } from "./routes/imagekitRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/form", formRouter);
app.use("/imagekit",imageKitRouter);

app.get("/health", (req, res) => {
  res.json({ message: "Server is Running" });
});

try {
  console.log("Connecting to Database...");
  await connectDB();
  app.listen("8001","0.0.0.0");
} catch (err) {
  console.error("Failed to connect db", err.message);
}

