import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./layouts/ProtectedRoute";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import InterviewSetupPage from "./pages/InterviewSetupPage";
import InterviewRoomPage from "./pages/InterviewRoomPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" 
        element={<LandingPage />} 
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/interview/setup"
          element={
            <ProtectedRoute>
              <InterviewSetupPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/interview/:id"
          element={
            <ProtectedRoute>
              <InterviewRoomPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
