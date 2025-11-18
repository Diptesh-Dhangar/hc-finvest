// routes/swapRoutes.js
import express from "express";
import {
  addSwap,
  getSwaps,
  getSwapById,
  updateSwap,
  deleteSwap,
} from "../controllers/swapController.js";

const router = express.Router();

router.post("/", addSwap); // POST /api/swaps
router.get("/", getSwaps); // GET /api/swaps
router.get("/:id", getSwapById); // GET /api/swaps/:id
router.put("/:id", updateSwap); // PUT /api/swaps/:id
router.delete("/:id", deleteSwap); // DELETE /api/swaps/:id

export default router;
