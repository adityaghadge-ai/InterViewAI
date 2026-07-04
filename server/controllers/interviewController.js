import Interview from "../models/Interview.js";

export const createInterview = async (req, res) => {
  try {
    const {
      role,
      experience,
      difficulty,
      interviewType,
    } = req.body;



if (!role || experience === undefined || !difficulty || !interviewType) {
    return res.status(400).json({
        success: false,
        message: "All fields are required",
    });
}

const interview = await Interview.create({
    user: req.user._id,
    role,
    experience,
    difficulty,
    interviewType,
});

    res.status(201).json({
      success: true,
      interview,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};