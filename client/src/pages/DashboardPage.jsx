import React from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const DashboardPage = () => {

    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const handleLogout = () => {

        logout();

        navigate("/login");

    };

    return (

        <div>

            <h1>Dashboard</h1>

            <h2>Welcome {user?.name}</h2>

            <button onClick={handleLogout}>
                Logout
            </button>

        </div>

    );

};

export default DashboardPage;