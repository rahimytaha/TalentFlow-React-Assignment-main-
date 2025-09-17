import React, { useMemo, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Filters from "./Filters";
import JobsTable from "./JobsTable";
import Pagination from "./Pagination";
import JobTitleModal from "./JobTitleModal";
import StatusModal from "./StatusModal";
import SortModal from "./SortModal";
import LocationModal from "./LocationModal";
import TagsModal from "./TagsModal";
import listing_image from "../../assets/images/listing_image.png";
import jobs from "../../mock/jobs";
import Footer from "../Footer";

export default function Dashboard() {
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 5;

    const [jobTitleModalOpen, setJobTitleModalOpen] = useState(false);
    const [statusModalOpen, setStatusModalOpen] = useState(false);
    const [sortModalOpen, setSortModalOpen] = useState(false);
    const [locationModalOpen, setLocationModalOpen] = useState(false);
    const [tagsModalOpen, setTagsModalOpen] = useState(false);
    const [jobTitleFilters, setJobTitleFilters] = useState({ categories: {}, titles: [], search: "" });
    const [statusFilters, setStatusFilters] = useState([]); // ["Active","Draft"]
    const [sortFilter, setSortFilter] = useState("Newest");
    const [locationFilters, setLocationFilters] = useState([]); // ["USA","India"]
    const [tagsFilters, setTagsFilters] = useState([]); // ["React","Management"]

    const jobTitleFiltersCount = useMemo(() => {
        const c = Object.values(jobTitleFilters.categories).filter(Boolean).length;
        return c + (jobTitleFilters.titles?.length || 0) + (jobTitleFilters.search ? 1 : 0);
    }, [jobTitleFilters]);

    const filteredJobs = useMemo(() => {
        let result = [...jobs];

        result = result.filter((job) => {
            if (
                jobTitleFilters.search &&
                !job.title.toLowerCase().includes(jobTitleFilters.search.toLowerCase()) &&
                !job.desc.toLowerCase().includes(jobTitleFilters.search.toLowerCase())
            ) {
                return false;
            }
            // categories
            const activeCategories = Object.keys(jobTitleFilters.categories).filter((c) => jobTitleFilters.categories[c]);
            if (
                activeCategories.length > 0 &&
                !job.tags.some((tag) => activeCategories.some((cat) => tag.toLowerCase().includes(cat.toLowerCase())))
            ) {
                return false;
            }
            // titles
            if (jobTitleFilters.titles.length > 0 && !jobTitleFilters.titles.includes(job.title)) {
                return false;
            }
            return true;
        });

        // Status Filter
        if (statusFilters.length > 0) {
            result = result.filter((job) => statusFilters.includes(job.status));
        }

        // Location Filter
        if (locationFilters.length > 0) {
            result = result.filter((job) => locationFilters.includes(job.location));
        }

        // Tags Filter
        if (tagsFilters.length > 0) {
            result = result.filter((job) => job.tags.some((t) => tagsFilters.includes(t)));
        }

        // Sort Filter
        if (sortFilter === "Newest") {
            result.sort((a, b) => new Date(b.created) - new Date(a.created));
        } else if (sortFilter === "Oldest") {
            result.sort((a, b) => new Date(a.created) - new Date(b.created));
        }

        return result;
    }, [jobs, jobTitleFilters, statusFilters, locationFilters, tagsFilters, sortFilter]);

    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
    const indexOfLast = currentPage * jobsPerPage;
    const indexOfFirst = indexOfLast - jobsPerPage;
    const currentJobs = filteredJobs.slice(indexOfFirst, indexOfLast);

    const statusColors = {
        active: "text-green-600 bg-green-100",
        draft: "text-yellow-600 bg-yellow-100",
        archived: "text-gray-600 bg-gray-200",
    };

    return (
        <div>
            <div className="flex min-h-screen bg-gray-50">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                    <Header />

                    <main className="flex-1 p-6 pt-24">
                        {/* Banner */}
                        <div className="bg-indigo-200 rounded-xl p-6 flex justify-between items-center">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">Job Listings</h2>
                                <p className="text-gray-600">Manage and track all your job postings.</p>
                            </div>
                            <img src={listing_image} alt="Create Job" className="w-40 cursor-pointer hover:opacity-90" />
                        </div>

                        {/* Filters */}
                        <Filters
                            filtersCount={jobTitleFiltersCount}
                            statusFiltersCount={statusFilters.length}
                            sortFiltersCount={sortFilter ? 1 : 0}
                            locationFiltersCount={locationFilters.length}
                            tagsFiltersCount={tagsFilters.length}
                            onApplyJobTitleFilters={(payload) => {
                                setJobTitleFilters(payload);
                                setJobTitleModalOpen(false);
                                setCurrentPage(1);
                            }}
                            onApplyStatusFilters={(payload) => {
                                setStatusFilters(payload);
                                setStatusModalOpen(false);
                                setCurrentPage(1);
                            }}
                            onApplySortFilters={(payload) => {
                                setSortFilter(payload);
                                setSortModalOpen(false);
                                setCurrentPage(1);
                            }}
                            onApplyLocationFilters={(payload) => {
                                setLocationFilters(payload);
                                setLocationModalOpen(false);
                                setCurrentPage(1);
                            }}
                            onApplyTagsFilters={(payload) => {
                                setTagsFilters(payload);
                                setTagsModalOpen(false);
                                setCurrentPage(1);
                            }}
                            // toggle modal opens
                            openJobTitleModal={() => setJobTitleModalOpen(true)}
                            openStatusModal={() => setStatusModalOpen(true)}
                            openSortModal={() => setSortModalOpen(true)}
                            openLocationModal={() => setLocationModalOpen(true)}
                            openTagsModal={() => setTagsModalOpen(true)}
                        />

                        {/* Jobs */}
                        <JobsTable jobs={currentJobs} statusColors={statusColors} />

                        {/* Pagination */}
                        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                    </main>
                </div>
            </div>

            {/* Modals */}
            <JobTitleModal
                open={jobTitleModalOpen}
                onClose={() => setJobTitleModalOpen(false)}
                onApply={(payload) => {
                    setJobTitleFilters(payload);
                    setJobTitleModalOpen(false);
                    setCurrentPage(1);
                }}
                initial={jobTitleFilters}
            />

            <StatusModal
                open={statusModalOpen}
                onClose={() => setStatusModalOpen(false)}
                onApply={(payload) => {
                    setStatusFilters(payload);
                    setStatusModalOpen(false);
                    setCurrentPage(1);
                }}
                initial={{ statuses: statusFilters }}
            />

            <SortModal
                open={sortModalOpen}
                onClose={() => setSortModalOpen(false)}
                onApply={(payload) => {
                    setSortFilter(payload);
                    setSortModalOpen(false);
                    setCurrentPage(1);
                }}
                initial={sortFilter}
            />

            <LocationModal
                open={locationModalOpen}
                onClose={() => setLocationModalOpen(false)}
                onApply={(payload) => {
                    setLocationFilters(payload);
                    setLocationModalOpen(false);
                    setCurrentPage(1);
                }}
                initial={locationFilters}
            />

            <TagsModal
                open={tagsModalOpen}
                onClose={() => setTagsModalOpen(false)}
                onApply={(payload) => {
                    setTagsFilters(payload);
                    setTagsModalOpen(false);
                    setCurrentPage(1);
                }}
                initial={tagsFilters}
            />

            <Footer />
        </div>
    );
}
