import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const DashboardPage = () => {

    const { user, logout } = useAuth();

    const navigate = useNavigate();

    return (

        <div>

            <h1>Welcome {user?.name}</h1>

            <button
                onClick={() =>
                    navigate("/interview/setup")
                }
            >
                Start Interview
            </button>

            <button
                onClick={() => {

                    logout();

                    navigate("/login");

                }}
            >
                Logout
            </button>

        </div>

    );

};

export default DashboardPage;