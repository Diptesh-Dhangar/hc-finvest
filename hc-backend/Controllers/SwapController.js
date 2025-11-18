import Swap from "../models/Swap.js";

// Create swap entry
export const createSwap = async (req, res) => {
  try {
    const newSwap = new Swap(req.body);
    await newSwap.save();
    res.status(201).json(newSwap);
  } catch (error) {
    res.status(500).json({ message: "Error saving swap", error });
  }
};

// Get all swaps
export const getAllSwaps = async (req, res) => {
  try {
    const swaps = await Swap.find().sort({ createdAt: -1 });
    res.status(200).json(swaps);
  } catch (error) {
    res.status(500).json({ message: "Error fetching swaps", error });
  }
};

// Delete swap
export const deleteSwap = async (req, res) => {
  try {
    await Swap.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Swap deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting swap", error });
  }
};
