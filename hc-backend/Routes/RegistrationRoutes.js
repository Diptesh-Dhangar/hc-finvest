import express from "express";
import {
  createRegistration,
  getAllRegistrations,
  deleteRegistration,
} from "../Controllers/RegistratioinController.js";

const router = express.Router();

// Create a new registration
router.post("/create", createRegistration);

// Get all registrations
router.get("/all", getAllRegistrations);

// Delete a registration by ID
router.delete("/delete/:id", deleteRegistration);

export default router;
