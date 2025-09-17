import React, { useState, useMemo } from "react";
import { X } from "lucide-react";

export default function SortModal({ open, onClose, onApply, initial = "Newest" }) {
    const [selected, setSelected] = useState(initial);

    const filtersActive = useMemo(() => (selected ? 1 : 0), [selected]);

    const apply = () => onApply(selected);

    const clearAll = () => {
        setSelected("");
        onApply("");
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/30" onClick={onClose} />
            <div className="absolute inset-0 grid place-items-center p-4">
                <div className="w-full max-w-md rounded-xl bg-white shadow-xl border border-gray-200">
                    <div className="flex items-center justify-between p-4 border-b">
                        <div className="text-sm text-gray-600 font-medium">Sort Jobs</div>
                        <button onClick={onClose} className="p-1 rounded hover:bg-gray-100 text-gray-600">
                            <X size={18} />
                        </button>
                    </div>

                    <div className="p-4 space-y-3">
                        {["Newest", "Oldest"].map((option) => (
                            <label
                                key={option}
                                className="flex items-center gap-3 rounded-lg border border-gray-200 px-3 py-2 hover:bg-gray-50"
                            >
                                <input
                                    type="radio"
                                    className="h-4 w-4"
                                    checked={selected === option}
                                    onChange={() => setSelected(option)}
                                />
                                <span className="text-sm text-gray-700">{option}</span>
                            </label>
                        ))}
                    </div>

                    <div className="flex items-center justify-between p-4 border-t text-sm">
                        <span className="text-gray-500">
                            {filtersActive ? `Sorted by ${selected}` : "No sort applied"}
                        </span>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={clearAll}
                                className="px-3 py-2 rounded border text-gray-600 hover:bg-gray-100"
                            >
                                Clear All
                            </button>
                            <button onClick={onClose} className="px-3 py-2 rounded border">
                                Cancel
                            </button>
                            <button
                                onClick={apply}
                                className="px-3 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
