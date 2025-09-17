import React, { useState, useRef, useEffect } from "react";
import { Search, Bell, LogOut } from "lucide-react";
import header_logo from "../../assets/images/header_logo.png";

export default function Header() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        window.location.href = "/"; // Redirect to home page
    };

    return (
        <header className="fixed top-0 left-0 right-0 flex items-center justify-between bg-white border-b border-gray-200 px-6 py-4 z-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
                <img src={header_logo} alt="TalentFlow" className="w-8 h-8" />
                <h1 className="font-bold text-lg text-gray-800">TalentFLOW</h1>
            </div>

            {/* Search Bar */}
            <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg w-1/2">
                <Search size={18} className="text-gray-500" />
                <input
                    type="text"
                    placeholder="Search opportunities and talents"
                    className="ml-2 bg-transparent outline-none w-full text-sm"
                />
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
                <Bell size={20} className="text-gray-600 cursor-pointer" />

                {/* Profile Dropdown */}
                <div
                    className="relative cursor-pointer"
                    ref={dropdownRef}
                >
                    <div
                        className="flex items-center gap-3"
                        onClick={() => setOpen((prev) => !prev)}
                    >
                        <img
                            src="https://i.pravatar.cc/40"
                            alt="User"
                            className="w-10 h-10 rounded-full"
                        />
                        <div>
                            <p className="font-medium text-gray-800">Google</p>
                            <p className="text-xs text-gray-500">HR Manager</p>
                        </div>
                    </div>

                    {open && (
                        <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg py-2 z-30">
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                            >
                                <LogOut size={16} />
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
