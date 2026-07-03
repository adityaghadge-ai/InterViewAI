import express from "express";
import {
    register,
    login,
    getCurrentUser
} from "../controllers/authController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Register User
router.post("/register", register);
//login user
router.post("/login", login);
// get current user 
router.get("/me", protect, getCurrentUser);
export default router;