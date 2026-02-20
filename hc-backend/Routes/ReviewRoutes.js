import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import {
  createReview,
  getReviews,
} from "../Controllers/ReviewController.js";

const router = express.Router();

// =============================
// SAFE UPLOAD DIRECTORY SETUP
// =============================
const uploadDir = path.resolve("uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// =============================
// MULTER CONFIG
// =============================
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// =============================
// ROUTES
// =============================
router.get("/", getReviews);
router.post("/", upload.single("image"), createReview);

export default router;