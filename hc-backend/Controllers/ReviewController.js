import Review from "../models/Review.js";

// ============================
// CREATE REVIEW
// ============================
export const createReview = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const { name, email, rating, description } = req.body;

    // Validation
    if (!name || !email || !description || !rating) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const review = await Review.create({
      name,
      email,
      rating: Number(rating), // IMPORTANT: convert to number
      description,
      image: req.file ? `/uploads/${req.file.filename}` : "",
    });

    res.status(201).json(review);

  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

// ============================
// GET ALL REVIEWS
// ============================
export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};