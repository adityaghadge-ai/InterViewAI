import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { createInterview } from "../services/interviewService";

const InterviewSetupPage = () => {
  const navigate = useNavigate();

  const { token } = useAuth();

  const [formData, setFormData] = useState({
    role: "",
    experience: 0,
    difficulty: "Medium",
    interviewType: "Mixed",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.name === "experience"
          ? Number(e.target.value)
          : e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createInterview(
        token,
        formData
      );

      navigate(`/interview/${response.interview._id}`);

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.message ||
        "Unable to create interview"
      );
    }
  };

  return (
    <div>

      <h1>Interview Setup</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="role"
          placeholder="Job Role"
          value={formData.role}
          onChange={handleChange}
        />

        <input
          type="number"
          name="experience"
          placeholder="Experience"
          value={formData.experience}
          onChange={handleChange}
        />

        <select
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <select
          name="interviewType"
          value={formData.interviewType}
          onChange={handleChange}
        >
          <option>HR</option>
          <option>Technical</option>
          <option>Mixed</option>
        </select>

        <button type="submit">
          Start Interview
        </button>

      </form>

    </div>
  );
};

export default InterviewSetupPage;