import React, { useState } from "react";
import { Filter, ChevronDown, Plus } from "lucide-react";
import JobTitleModal from "./JobTitleModal";
import StatusModal from "./StatusModal";
import SortModal from "./SortModal";
import LocationModal from "./LocationModal";
import TagsModal from "./TagsModal";
import { Link } from "react-router-dom";

export default function Filters({
    filtersCount,
    statusFiltersCount,
    sortFiltersCount,
    locationFiltersCount,
    tagsFiltersCount,
    onApplyJobTitleFilters,
    onApplyStatusFilters,
    onApplySortFilters,
    onApplyLocationFilters,
    onApplyTagsFilters,
}) {
    const [isJobTitleOpen, setIsJobTitleOpen] = useState(false);
    const [isStatusOpen, setIsStatusOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [isLocationOpen, setIsLocationOpen] = useState(false);
    const [isTagsOpen, setIsTagsOpen] = useState(false);

    const buttonClass =
        "border rounded px-3 py-2 text-sm inline-flex items-center gap-2 hover:bg-gray-50";

    const badgeClass =
        "text-xs rounded-full bg-indigo-600 text-white px-2 py-0.5";

    return (
        <div className="flex items-center justify-between mt-6 mb-4 flex-wrap">
            {/* Left Side Filters */}
            <div className="flex items-center gap-4 flex-wrap">
                <span className="flex items-center justify-center w-8 h-8 bg-gray-100">
                    <Filter size={16} className="text-dark" />
                </span>

                {/* Job Title */}
                <button type="button" onClick={() => setIsJobTitleOpen(true)} className={buttonClass}>
                    <span>Job Title</span>
                    <ChevronDown size={16} className="ml-auto text-gray-500" />
                    {filtersCount > 0 && <span className={badgeClass}>{filtersCount}</span>}
                </button>

                {/* Status */}
                <button type="button" onClick={() => setIsStatusOpen(true)} className={buttonClass}>
                    <span>Status</span>
                    <ChevronDown size={16} className="ml-auto text-gray-500" />
                    {statusFiltersCount > 0 && <span className={badgeClass}>{statusFiltersCount}</span>}
                </button>

                {/* Sort */}
                <button type="button" onClick={() => setIsSortOpen(true)} className={buttonClass}>
                    <span>Sort</span>
                    <ChevronDown size={16} className="ml-auto text-gray-500" />
                    {sortFiltersCount > 0 && <span className={badgeClass}>{sortFiltersCount}</span>}
                </button>

                {/* Location */}
                <button type="button" onClick={() => setIsLocationOpen(true)} className={buttonClass}>
                    <span>Location</span>
                    <ChevronDown size={16} className="ml-auto text-gray-500" />
                    {locationFiltersCount > 0 && <span className={badgeClass}>{locationFiltersCount}</span>}
                </button>

                {/* Tags */}
                <button type="button" onClick={() => setIsTagsOpen(true)} className={buttonClass}>
                    <span>Tags</span>
                    <ChevronDown size={16} className="ml-auto text-gray-500" />
                    {tagsFiltersCount > 0 && <span className={badgeClass}>{tagsFiltersCount}</span>}
                </button>
            </div>

            {/* Right Side Create Job Button */}
            <Link
                to="/create-job"
                className="ml-auto bg-indigo-600 text-white px-4 py-2 rounded inline-flex items-center gap-2 hover:bg-indigo-700"
            >
                <Plus size={16} />
                <span>Create Job</span>
            </Link>

            {/* Modals */}
            <JobTitleModal
                open={isJobTitleOpen}
                onClose={() => setIsJobTitleOpen(false)}
                onApply={onApplyJobTitleFilters}
                initial={{ search: "", categories: {}, titles: [] }}
            />

            <StatusModal
                open={isStatusOpen}
                onClose={() => setIsStatusOpen(false)}
                onApply={onApplyStatusFilters}
                initial={{ statuses: [] }}
            />

            <SortModal
                open={isSortOpen}
                onClose={() => setIsSortOpen(false)}
                onApply={onApplySortFilters}
                initial="Newest"
            />

            <LocationModal
                open={isLocationOpen}
                onClose={() => setIsLocationOpen(false)}
                onApply={onApplyLocationFilters}
                initial={[]}
            />

            <TagsModal
                open={isTagsOpen}
                onClose={() => setIsTagsOpen(false)}
                onApply={onApplyTagsFilters}
                initial={[]}
            />
        </div>
    );
}
