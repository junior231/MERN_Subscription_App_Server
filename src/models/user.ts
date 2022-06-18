import { timeStamp } from "console";
import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("user", UserSchema);
