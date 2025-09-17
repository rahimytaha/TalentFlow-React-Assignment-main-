import React from "react";

export default function NavBar({ onSaveDraft }) {
    return (
        <nav className="w-full bg-white border-b shadow-sm">
            <div className="max-w-3xl mx-auto px-6 py-3 flex justify-between items-center">
                {/* Left side */}
                <div className="flex items-center gap-2 text-gray-800 font-medium text-lg">
                    <span className="text-blue-600">💼</span>
                    <span>Create New Job</span>
                </div>

                {/* Right side */}
                <button
                    type="button"
                    onClick={onSaveDraft}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
                >
                    <span>💾</span> Save Draft
                </button>
            </div>
        </nav>
    );
}
