import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createInterview } from "../controllers/interviewController.js";

const router = express.Router();

router.post("/", protect, createInterview);

export default router;