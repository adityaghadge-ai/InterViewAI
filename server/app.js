import express from "express";
import authRoutes from "./routes/authRoutes.js";
import interviewRoutes from "./routes/interviewRoutes.js";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/interviews", interviewRoutes);


// Test Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "InterviewAI Backend is Running 🚀"
    });
});

export default app;