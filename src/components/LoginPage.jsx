import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import header_logo from "../assets/images/header_logo.png";
import signup from "../assets/images/signup.png";
import Footer from "./Footer";
import Header from "./Header";

export default function LoginPage() {
    const navigate = useNavigate();

    // Mock users
    const mockUsers = [
        { email: "abc@talentflow.com", password: "password123", name: "ABC DEF" },
        { email: "def@talentflow.com", password: "secure456", name: "DEF GHI" },
        { email: "admin@talentflow.com", password: "admin@123", name: "Admin User" },
    ];

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const user = mockUsers.find(
            (u) => u.email === email && u.password === password
        );

        if (user) {
            // ✅ Save to localStorage
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            setError("");
            navigate("/dashboard");
        } else {
            setError("Invalid email or password. Try again.");
        }
    };

    return (
        <div>
            <Header />
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 bg-white shadow-xl rounded-2xl overflow-hidden">
                    {/* Left Section */}
                    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-white p-10">
                        <h2 className="text-2xl font-bold text-gray-800 text-center">
                            Looking for the right talent?
                        </h2>
                        <p className="text-gray-500 mt-3 text-center">
                            Easily manage candidates and job postings with TalentFLOW
                        </p>
                        <div className="mt-10">
                            <img src={signup} alt="Talent Illustration" className="w-360 mx-auto" />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col justify-center p-10">
                        <div className="text-center">
                            <img
                                src={header_logo}
                                alt="TalentFlow Logo"
                                className="w-12 h-12 mx-auto"
                            />
                            <h3 className="mt-4 text-xl font-semibold text-gray-800">
                                Join TalentFLOW
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Log in to continue your hiring <br /> process
                            </p>
                        </div>

                        {/* Social buttons */}
                        <div className="mt-6 space-y-3">
                            <button className="flex items-center justify-center w-full gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition">
                                <FcGoogle size={20} />
                                <span className="text-gray-700 font-medium">
                                    Continue with Google
                                </span>
                            </button>
                            <button className="flex items-center justify-center w-full gap-2 bg-black text-white rounded-lg py-2 hover:bg-gray-800 transition">
                                <FaApple size={20} />
                                <span className="font-medium">Continue with Apple</span>
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="flex items-center my-6">
                            <div className="flex-1 h-px bg-gray-300"></div>
                            <span className="px-3 text-gray-400 text-sm">or log in with email</span>
                            <div className="flex-1 h-px bg-gray-300"></div>
                        </div>

                        {/* Login Form */}
                        <form className="space-y-4" onSubmit={handleLogin}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                            >
                                Log In
                            </button>
                        </form>

                        {error && <p className="text-red-500 text-sm mt-3 text-center">{error}</p>}

                        {/* Forgot Password */}
                        <div className="flex justify-center items-center mt-4 text-sm">
                            <a href="#" className="text-indigo-600 hover:underline">Forgot password?</a>
                        </div>

                        {/* Signup link */}
                        <p className="text-sm text-gray-500 mt-4 text-center">
                            Don’t have an account yet?{" "}
                            <a href="/signup" className="text-indigo-600 hover:underline">Sign up here</a>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
