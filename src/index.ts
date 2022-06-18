import express from "express";
import authRoutes from "./routes/auth";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

// connect mongodb to app
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("MongoDB Connected");

    // initialize app server
    const app = express();

    // enable server process json objects
    app.use(express.json());
    // prevent cors policy error
    app.use(cors());
    app.use("/auth", authRoutes);

    app.listen(8080, () => {
      console.log("Server running, listening on port 8080");
    });
  })
  .catch((error) => {
    console.log(error);
    throw new Error(error);
  });
