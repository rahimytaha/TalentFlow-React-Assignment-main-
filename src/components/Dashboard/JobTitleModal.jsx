
import React, { useMemo, useState } from "react";
import { Search, X, Check } from "lucide-react";

export default function JobTitleModal({
    open,
    onClose,
    onApply,
    initial = { search: "", categories: {}, titles: [] },
}) {
    const [search, setSearch] = useState(initial.search);
    const [categories, setCategories] = useState(initial.categories);
    const [titles, setTitles] = useState(new Set(initial.titles));

    const jobCategories = [
        { key: "software", label: "💻 Software Development", color: "text-blue-600" },
        { key: "marketing", label: "📈 Marketing & Sales", color: "text-rose-600" },
        { key: "design", label: "🎨 Design & Creative", color: "text-yellow-600" },
        { key: "hr", label: "🧑‍🤝‍🧑 Human Resources", color: "text-red-600" },
    ];

    const popularTitles = [
        "Software Engineer",
        "Product Manager",
        "UX Designer",
        "Data Analyst",
        "Marketing Manager",
        "Sales Representative",
    ];

    const filtersActive = useMemo(() => {
        const catCount = Object.values(categories).filter(Boolean).length;
        const titleCount = titles.size;
        return catCount + titleCount;
    }, [categories, titles]);

    const toggleCategory = (key) =>
        setCategories((prev) => ({ ...prev, [key]: !prev[key] }));

    const toggleTitle = (title) =>
        setTitles((prev) => {
            const next = new Set(prev);
            next.has(title) ? next.delete(title) : next.add(title);
            return next;
        });

    const clearAll = () => {
        setCategories({});
        setTitles(new Set());
        setSearch("");
    };

    const apply = () => onApply({ categories, titles: Array.from(titles), search });

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/30" onClick={onClose} />

            {/* Modal */}
            <div className="absolute inset-0 grid place-items-center p-4">
                <div className="w-full max-w-2xl rounded-xl bg-white shadow-xl border border-gray-200">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b">
                        <div className="text-sm text-gray-600">Search by Job Title</div>
                        <button
                            onClick={onClose}
                            className="p-1 rounded hover:bg-gray-100 text-gray-600"
                            aria-label="Close"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="p-4 space-y-4">
                        {/* Search */}
                        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg">
                            <Search size={16} className="text-gray-500" />
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="ml-2 bg-transparent outline-none w-full text-sm"
                                placeholder="Search for specific job titles..."
                            />
                        </div>

                        {/* Categories */}
                        <div>
                            <div className="text-xs font-semibold text-gray-500 mb-2">
                                Job Categories
                            </div>
                            <div className="space-y-2">
                                {jobCategories.map((c) => (
                                    <label
                                        key={c.key}
                                        className="flex items-center gap-3 rounded-lg border border-gray-200 px-3 py-2 hover:bg-gray-50"
                                    >
                                        <input
                                            type="checkbox"
                                            className="h-4 w-4"
                                            checked={!!categories[c.key]}
                                            onChange={() => toggleCategory(c.key)}
                                        />
                                        <span className={`text-sm ${c.color}`}>{c.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Popular titles */}
                        <div>
                            <div className="text-xs font-semibold text-gray-500 mb-2">
                                Popular Job Titles
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {popularTitles.map((t) => {
                                    const active = titles.has(t);
                                    return (
                                        <button
                                            type="button"
                                            key={t}
                                            onClick={() => toggleTitle(t)}
                                            className={`px-2.5 py-1.5 rounded-full text-xs border transition ${active
                                                ? "bg-indigo-600 text-white border-indigo-600"
                                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                                                }`}
                                        >
                                            <span className="inline-flex items-center gap-1">
                                                {active && <Check size={14} />}
                                                {t}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
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
