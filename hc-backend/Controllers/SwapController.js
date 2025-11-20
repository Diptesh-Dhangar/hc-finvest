import Swap from "../models/Swap.js";

//Add Swap
export const addSwap = async (req, res) => {
  try {
    const { marketType, currencyPair, swapLong, swapShort } = req.body;

    // Validate
    if (!marketType || !currencyPair || !swapLong || !swapShort) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // Check if currencyPair already exists
    // const existing = await Swap.findOne({ currencyPair });
    // if (existing) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Currency Pair already exists",
    //   });
    // }

    // Create new swap record
    const newSwap = await Swap.create({
      marketType,
      currencyPair,
      swapLong,
      swapShort,
    });

    res.status(201).json({
      success: true,
      message: "Swap added successfully",
      data: newSwap,
    });
  } catch (error) {
    console.error("Error in addSwap:", error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
