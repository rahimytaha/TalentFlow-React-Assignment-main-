
import React, { useMemo, useState } from "react";
import { X } from "lucide-react";

export default function JobStatusModal({ open, onClose, onApply, initial }) {
    const [statuses, setStatuses] = useState(initial.statuses || {});

    const jobStatuses = [
        { key: "active", label: "Active" },
        { key: "draft", label: "Draft" },
        { key: "archived", label: "Archived" },
    ];

    const filtersActive = useMemo(
        () => Object.values(statuses).filter(Boolean).length,
        [statuses]
    );

    const toggleStatus = (key) =>
        setStatuses((prev) => ({ ...prev, [key]: !prev[key] }));

    const clearAll = () => setStatuses({});

    const apply = () => onApply({ statuses });

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/30" onClick={onClose} />

            {/* Modal */}
            <div className="absolute inset-0 grid place-items-center p-4">
                <div className="w-full max-w-md rounded-xl bg-white shadow-xl border border-gray-200">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b">
                        <div className="text-sm text-gray-600">Search by Job Status</div>
                        <button
                            onClick={onClose}
                            className="p-1 rounded hover:bg-gray-100 text-gray-600"
                            aria-label="Close"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="p-4 space-y-3">
                        {jobStatuses.map((s) => (
                            <label
                                key={s.key}
                                className="flex items-center gap-3 rounded-lg border border-gray-200 px-3 py-2 hover:bg-gray-50"
                            >
                                <input
                                    type="checkbox"
                                    className="h-4 w-4"
                                    checked={!!statuses[s.key]}
                                    onChange={() => toggleStatus(s.key)}
                                />
                                <span className="text-sm text-gray-700">{s.label}</span>
                            </label>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between p-4 border-t text-sm">
                        <div className="flex items-center gap-3">
                            <span className="text-gray-500">
                                {filtersActive > 0 ? (
                                    <>
                                        <strong>{filtersActive}</strong>{" "}
                                        filter{filtersActive > 1 ? "s" : ""} active
                                    </>
                                ) : (
                                    "No filters applied"
                                )}
                            </span>
                            <button
                                onClick={clearAll}
                                className="text-gray-600 hover:text-gray-800 underline"
                            >
                                Clear All
                            </button>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={onClose}
                                className="px-3 py-2 rounded border"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={apply}
                                className="px-3 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
                            >
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
