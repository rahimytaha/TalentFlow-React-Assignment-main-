import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import signup from "../assets/images/signup.png";
import header_logo from "../assets/images/header_logo.png";
import Footer from "./Footer";
import Header from "./Header";

export default function SignupPage() {
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

                        {/* Placeholder for illustration */}
                        <div className="mt-10">
                            <img
                                src={signup}
                                alt="Talent Illustration"
                                className="w-360 mx-auto"
                            />
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
                                Start hiring the best talent today.<br></br> Create your account in minutes.
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
                            <span className="px-3 text-gray-400 text-sm">or sign up with email</span>
                            <div className="flex-1 h-px bg-gray-300"></div>
                        </div>

                        {/* Form */}
                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                            <input
                                type="password"
                                placeholder="Create password"
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Company name"
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                            >
                                Create Account
                            </button>
                        </form>

                        {/* Terms */}
                        <div className="flex items-start gap-2 mt-4 text-xs text-gray-500">
                            <input
                                type="checkbox"
                                className="mt-0.5 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <p>
                                By creating an account, you agree to our{" "}
                                <a href="#" className="text-indigo-600 hover:underline">
                                    Terms of Service
                                </a>{" "}
                                and{" "}
                                <a href="#" className="text-indigo-600 hover:underline">
                                    Privacy Policy
                                </a>.
                            </p>
                        </div>


                        {/* Login link */}
                        <p className="text-sm text-gray-500 mt-4 text-center">
                            Already have an account?{" "}
                            <a href="/login" className="text-indigo-600 hover:underline">
                                Log in
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );

}
