import express from "express";
import {
  addSpread,
  getSpreads,
  getSpreadById,
  updateSpread,
  deleteSpread,
} from "../Controllers/SpreadController.js";

const router = express.Router();

router.post("/add", addSpread);
router.get("/", getSpreads); // ➡️ GET /api/spreads
router.get("/:id", getSpreadById); // ➡️ GET /api/spreads/:id
router.put("/:id", updateSpread); // ➡️ PUT /api/spreads/:id
router.delete("/:id", deleteSpread); // ➡️ DELETE /api/spreads/:id

export default router;
