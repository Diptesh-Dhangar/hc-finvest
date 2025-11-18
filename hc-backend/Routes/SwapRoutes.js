import express from "express";
import {
  createSwap,
  getAllSwaps,
  deleteSwap,
} from "../Controllers/SwapController.js";

const router = express.Router();

router.post("/", createSwap);
router.get("/", getAllSwaps);
router.delete("/:id", deleteSwap);

export default router;
