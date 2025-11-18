import mongoose from "mongoose";

const swapSchema = new mongoose.Schema(
  {
    marketType: {
      type: String,
      required: true,
      trim: true,
    },
    currencyPairs: {
      type: String,
      required: true,
      trim: true,
    },
    swapLong: {
      type: Number,
      required: true,
    },
    swapShort: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Swap", swapSchema);





