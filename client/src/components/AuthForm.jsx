import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import InputField from "./InputField";

const AuthForm = ({ type }) => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      let response;

      if (type === "register") {
        response = await registerUser(formData);
      } else {
        response = await loginUser({
          email: formData.email,
          password: formData.password,
        });
      }

      login(response.token, response.user);

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      {type === "register" && (
        <InputField
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
      )}

      <InputField
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <InputField
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <button type="submit" disabled={loading}>
        {loading
          ? "Loading..."
          : type === "register"
          ? "Register"
          : "Login"}
      </button>

    </form>
  );
};

export default AuthForm;