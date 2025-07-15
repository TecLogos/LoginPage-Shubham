import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Welcome() {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const handleDashboard = () => {
        navigate("/dashboard");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-purple-300 to-pink-200">
            <div className="bg-white bg-opacity-90 p-10 rounded-3xl shadow-2xl flex flex-col items-center max-w-md w-full">
                <svg className="w-20 h-20 mb-6 text-blue-500 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7 17a5 5 0 0010 0V7a5 5 0 00-10 0v10z" />
                </svg>
                <h1 className="text-4xl font-extrabold text-blue-700 mb-2 text-center drop-shadow-lg">Welcome!</h1>
                <p className="text-lg text-gray-700 mb-6 text-center">
                    You have successfully logged in.<br />
                    Enjoy exploring the app!
                </p>
                <div className="flex gap-4">
                    <button
                        className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold shadow hover:from-blue-600 hover:to-purple-600 transition"
                        onClick={handleDashboard}
                    >
                        Go to Dashboard
                    </button>
                    <button
                        className="px-6 py-2 bg-gradient-to-r from-pink-400 to-yellow-400 text-white rounded-lg font-semibold shadow hover:from-pink-500 hover:to-yellow-500 transition"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}