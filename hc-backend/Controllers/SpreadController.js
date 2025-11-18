import Spread from "../models/Spread.js";

// ➡️ Add new spread
export const addSpread = async (req, res) => {
  try {
    const spread = new Spread(req.body);
    await spread.save();
    res.status(201).json({ message: "Spread added successfully!", spread });
  } catch (error) {
    console.error("Error adding spread:", error);
    res
      .status(500)
      .json({ message: "Failed to add spread", error: error.message });
  }
};

// ➡️ Get all spreads
export const getSpreads = async (req, res) => {
  try {
    const spreads = await Spread.find().sort({ createdAt: -1 });
    res.status(200).json(spreads);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch spreads", error: error.message });
  }
};

// ➡️ Get single spread by ID
export const getSpreadById = async (req, res) => {
  try {
    const spread = await Spread.findById(req.params.id);
    if (!spread) return res.status(404).json({ message: "Spread not found" });
    res.status(200).json(spread);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch spread", error: error.message });
  }
};

// ➡️ Update spread
export const updateSpread = async (req, res) => {
  try {
    const spread = await Spread.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!spread) return res.status(404).json({ message: "Spread not found" });
    res.status(200).json({ message: "Spread updated successfully!", spread });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update spread", error: error.message });
  }
};

// ➡️ Delete spread
export const deleteSpread = async (req, res) => {
  try {
    const spread = await Spread.findByIdAndDelete(req.params.id);
    if (!spread) return res.status(404).json({ message: "Spread not found" });
    res.status(200).json({ message: "Spread deleted successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete spread", error: error.message });
  }
};
