import { useParams } from "react-router-dom";
import jobs from "../../mock/jobs";
import Sidebar from "./Sidebar";
import Footer from "../Footer";
import Header from "./Header";

function StatCard({ label, value, sub, trend }) {
    return (
        <div className="bg-white rounded-2xl shadow p-4">
            <p className="text-sm text-gray-500">{label}</p>
            <p className="text-2xl font-semibold">{value}</p>
            {sub && <p className="text-xs text-gray-400">{sub}</p>}
            {trend && <p className="text-xs text-green-500">{trend}</p>}
        </div>
    );
}

export default function JobDetails() {
    const { id } = useParams();
    const job = jobs.find((j) => String(j.id) === id);

    if (!job) return <p className="p-6">Job not found</p>;

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <Header />

                <main className="flex-1 p-6 pt-24">
                    <div className="max-w-8xl mx-auto space-y-6">
                        {/* Page Header */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-2xl font-semibold">{job.title}</h1>
                                <p className="text-sm text-gray-500">Job ID: JOB-{job.id}</p>
                            </div>
                            <div className="flex gap-2">
                                <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm">
                                    {job.status}
                                </span>
                                <button className="px-4 py-1 border rounded-lg text-sm hover:bg-gray-50">
                                    Edit Job
                                </button>
                                <button className="px-4 py-1 border border-red-500 text-red-500 rounded-lg text-sm hover:bg-red-50">
                                    Delete Job
                                </button>
                            </div>
                        </div>

                        {/* Stats row */}
                        <div className="grid grid-cols-5 gap-4">
                            <StatCard label="Total Applications" value={247} trend="+12% from last week" />
                            <StatCard label="New This Week" value={43} sub="Last 7 days" />
                            <StatCard label="Shortlisted" value={18} sub="Under review" />
                            <StatCard label="Interviewed" value={8} sub="Completed" />
                            <StatCard label="Views" value={1247} trend="+8% from last week" />
                        </div>

                        {/* Main content grid */}
                        <div className="grid grid-cols-3 gap-6">
                            {/* Left Column: Job Details & Summary */}
                            <div className="col-span-2 space-y-6">
                                {/* Job Details */}
                                <div className="bg-white rounded-2xl shadow p-6">
                                    <h2 className="font-semibold mb-4">Job Details</h2>
                                    <dl className="grid grid-cols-2 gap-y-2 text-sm">
                                        <dt className="font-medium">Employment Type:</dt>
                                        <dd>{job.employmentType || "Full Time"}</dd>
                                        <dt className="font-medium">Department:</dt>
                                        <dd>{job.department || "Design"}</dd>
                                        <dt className="font-medium">Office Location:</dt>
                                        <dd>{job.location}</dd>
                                        <dt className="font-medium">Work Type:</dt>
                                        <dd>{job.workType || "Hybrid"}</dd>
                                        <dt className="font-medium">Experience Level:</dt>
                                        <dd>{job.experience || "Senior (5–8 years)"}</dd>
                                        <dt className="font-medium">Salary Range:</dt>
                                        <dd>{job.salary || "$120,000–$150,000"}</dd>
                                        <dt className="font-medium">Posted Date:</dt>
                                        <dd>{job.created}</dd>
                                        <dt className="font-medium">Closing Date:</dt>
                                        <dd>{job.closingDate || "October 15, 2025"}</dd>
                                    </dl>
                                </div>

                                {/* Summary */}
                                <div className="bg-white rounded-2xl shadow p-6">
                                    <h2 className="font-semibold mb-4">Job Summary</h2>
                                    <p className="text-sm text-gray-700">{job.desc}</p>
                                </div>
                            </div>

                            {/* Right Column: Activity & Team */}
                            <div className="space-y-6">
                                <div className="bg-white rounded-2xl shadow p-6">
                                    <h2 className="font-semibold mb-4">Recent Activity</h2>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>Sarah Johnson applied (2 hours ago)</li>
                                        <li>Michael Chen was shortlisted (5 hours ago)</li>
                                        <li>Interview scheduled with Emily (1 day ago)</li>
                                        <li>Job description updated (3 days ago)</li>
                                    </ul>
                                </div>
                                <div className="bg-white rounded-2xl shadow p-6">
                                    <h2 className="font-semibold mb-4">Team Members</h2>
                                    <ul className="space-y-2 text-sm">
                                        <li>Jessica Williams – Hiring Manager</li>
                                        <li>David Martinez – Design Lead</li>
                                        <li>Alex Thompson – HR Specialist</li>
                                    </ul>
                                </div>
                                <div className="bg-white rounded-2xl shadow p-6">
                                    <h2 className="font-semibold mb-4">Job Performance</h2>
                                    <p className="text-sm">Application Rate: High</p>
                                    <p className="text-sm">Quality Score: 8.4/10</p>
                                    <p className="text-sm">Time to Fill: 18 days avg</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}
