import Swap from "../models/Swap.js";

// ➡️ Add new swap
export const addSwap = async (req, res) => {
  try {
    const swap = new Swap(req.body);
    await swap.save();
    res.status(201).json({ message: "Swap added successfully!", swap });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add swap", error: error.message });
  }
};

// ➡️ Get all swaps
export const getSwaps = async (req, res) => {
  try {
    const swaps = await Swap.find().sort({ createdAt: -1 });
    res.status(200).json(swaps);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch swaps", error: error.message });
  }
};

// ➡️ Get swap by ID
export const getSwapById = async (req, res) => {
  try {
    const swap = await Swap.findById(req.params.id);
    if (!swap) return res.status(404).json({ message: "Swap not found" });
    res.status(200).json(swap);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch swap", error: error.message });
  }
};

// ➡️ Update swap
export const updateSwap = async (req, res) => {
  try {
    const swap = await Swap.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!swap) return res.status(404).json({ message: "Swap not found" });
    res.status(200).json({ message: "Swap updated successfully!", swap });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update swap", error: error.message });
  }
};

// ➡️ Delete swap
export const deleteSwap = async (req, res) => {
  try {
    const swap = await Swap.findByIdAndDelete(req.params.id);
    if (!swap) return res.status(404).json({ message: "Swap not found" });
    res.status(200).json({ message: "Swap deleted successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete swap", error: error.message });
  }
};
