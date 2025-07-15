import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
            <header className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-extrabold text-blue-700 drop-shadow-lg">Teclogos GreytHr Dashboard</h1>
                <Link
                    to="/login"
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold shadow hover:from-blue-600 hover:to-purple-600 transition"
                >
                    Logout
                </Link>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Attendance Info */}
                <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
                    <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h2 className="text-xl font-bold text-blue-700 mb-2">Attendance Info</h2>
                    <p className="text-gray-600 mb-4 text-center">
                        View your daily attendance, check-in/out times, and monthly summary.
                    </p>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition">
                        View Attendance
                    </button>
                </div>
                {/* Apply Leave */}
                <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
                    <svg className="w-12 h-12 text-green-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    <h2 className="text-xl font-bold text-green-700 mb-2">Apply Leave</h2>
                    <p className="text-gray-600 mb-4 text-center">
                        Submit leave requests and track approval status.
                    </p>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition">
                        Apply for Leave
                    </button>
                </div>
                {/* Leave Regularization */}
                <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
                    <svg className="w-12 h-12 text-yellow-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <h2 className="text-xl font-bold text-yellow-700 mb-2">Leave Regularization</h2>
                    <p className="text-gray-600 mb-4 text-center">
                        Regularize missed punches or attendance anomalies.
                    </p>
                    <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition">
                        Regularize Attendance
                    </button>
                </div>
                {/* More Features */}
                <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
                    <svg className="w-12 h-12 text-pink-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
                    </svg>
                    <h2 className="text-xl font-bold text-pink-700 mb-2">More Features</h2>
                    <ul className="text-gray-600 mb-4 text-center list-disc list-inside">
                        <li>Payslip Download</li>
                        <li>Holiday Calendar</li>
                        <li>Profile Management</li>
                        <li>Team Directory</li>
                    </ul>
                    <button className="px-4 py-2 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600 transition">
                        Explore Features
                    </button>
                </div>
            </div>
        </div>
    );
}