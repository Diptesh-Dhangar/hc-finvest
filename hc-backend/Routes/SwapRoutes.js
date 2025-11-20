import express from "express";
import {
  addSwap
} from "../Controllers/SwapController.js";

const router = express.Router();

router.post("/", addSwap); // POST /api/swaps
router.get("/currencyPairs/:marketType", getCurrencyPairsByMarket);

// router.post("/add", addSwap);
// router.put("/update", updateSwap);
// router.post("/save", saveSwap); // Upsert

export default router;
