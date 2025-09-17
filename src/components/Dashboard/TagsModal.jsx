import React, { useState, useMemo } from "react";
import { X } from "lucide-react";
import jobs from "../../mock/jobs";

export default function TagsModal({ open, onClose, onApply, initial = [] }) {
    const uniqueTags = Array.from(new Set(jobs.flatMap((job) => job.tags)));
    const [tags, setTags] = useState(new Set(initial));

    const toggleTag = (tag) => {
        setTags((prev) => {
            const next = new Set(prev);
            next.has(tag) ? next.delete(tag) : next.add(tag);
            return next;
        });
    };

    const clearAll = () => setTags(new Set());
    const filtersActive = useMemo(() => tags.size, [tags]);

    const apply = () => onApply(Array.from(tags));

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/30" onClick={onClose} />
            <div className="absolute inset-0 grid place-items-center p-4">
                <div className="w-full max-w-md rounded-xl bg-white shadow-xl border border-gray-200">
                    <div className="flex items-center justify-between p-4 border-b">
                        <div className="text-sm text-gray-600 font-medium">Filter by Tags</div>
                        <button onClick={onClose} className="p-1 rounded hover:bg-gray-100 text-gray-600">
                            <X size={18} />
                        </button>
                    </div>

                    <div className="p-4 space-y-3">
                        {uniqueTags.map((tag) => (
                            <label
                                key={tag}
                                className="flex items-center gap-3 rounded-lg border border-gray-200 px-3 py-2 hover:bg-gray-50"
                            >
                                <input
                                    type="checkbox"
                                    className="h-4 w-4"
                                    checked={tags.has(tag)}
                                    onChange={() => toggleTag(tag)}
                                />
                                <span className="text-sm text-gray-700">{tag}</span>
                            </label>
                        ))}
                    </div>

                    <div className="flex items-center justify-between p-4 border-t text-sm">
                        <span className="text-gray-500">
                            {filtersActive > 0 ? `${filtersActive} selected` : "No filters applied"}
                        </span>
                        <div className="flex items-center gap-2">
                            <button onClick={clearAll} className="text-gray-600 hover:text-gray-800 underline">
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
