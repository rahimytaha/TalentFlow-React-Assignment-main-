import React from "react";
import { Eye, Edit, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function JobsTable({ jobs, statusColors }) {
    const navigate = useNavigate();
    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-left">
                <thead className="bg-gray-100 text-gray-600 text-sm">
                    <tr>
                        <th className="px-6 py-3">Job Title</th>
                        <th className="px-6 py-3">Created</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Applicants</th>
                        <th className="px-6 py-3">Tags</th>
                        <th className="px-6 py-3">Location</th>
                        <th className="px-6 py-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job, idx) => (
                        <tr key={idx} className="border-t">
                            <td className="px-6 py-4">
                                <p className="font-medium">{job.title}</p>
                                <p className="text-sm text-gray-500">{job.desc}</p>
                            </td>
                            <td className="px-6 py-4 text-sm">{job.created}</td>
                            <td className="px-6 py-4">
                                <span
                                    className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[job.status]}`}
                                >
                                    {job.status}
                                </span>
                            </td>
                            <td className="px-6 py-4">{job.applicants}</td>
                            <td className="px-6 py-4 space-x-2">
                                {job.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full text-xs"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </td>
                            <td className="px-6 py-4">{job.location}</td>
                            <td className="px-6 py-4 flex gap-2">
                                <button onClick={() => navigate(`/jobs/${job.id}`)} className="text-indigo-600 hover:text-indigo-800">
                                    <Eye size={18} />
                                </button>
                                <button onClick={() => navigate(`/edit-job/${job.id}`)} className="text-blue-600 hover:text-blue-800">
                                    <Edit size={18} />
                                </button>
                                <button className="text-red-600 hover:text-red-800">
                                    <Trash2 size={18} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
