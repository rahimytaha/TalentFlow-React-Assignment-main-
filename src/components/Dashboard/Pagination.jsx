import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
            <p>
                Page {currentPage} of {totalPages}
            </p>
            <div className="flex gap-2">
                <button
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                    className="px-3 py-1 rounded border disabled:opacity-50"
                >
                    Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => onPageChange(i + 1)}
                        className={`px-3 py-1 rounded border ${currentPage === i + 1 ? "bg-indigo-600 text-white" : "bg-white"
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => onPageChange(currentPage + 1)}
                    className="px-3 py-1 rounded border disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
