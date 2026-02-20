import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    rating: Number,
    description: String,
    image: String,
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);