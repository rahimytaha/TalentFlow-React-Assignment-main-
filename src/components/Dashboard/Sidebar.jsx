import React from "react";
import { Home, Briefcase, Users, ClipboardList, User as UserIcon } from "lucide-react";

export default function Sidebar() {
    return (
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col pt-16">
            <div className="p-6 flex-1">
                <nav className="space-y-4">
                    <a className="flex items-center py-2 px-1 gap-2 text-gray-700 font-medium hover:text-indigo-600 leading-7" href="#">
                        <Home size={18} /> Dashboard
                    </a>
                    <a
                        href="#"
                        className="flex items-center py-2 px-1 bg-indigo-100 text-indigo-600 font-medium leading-7 rounded-md hover:bg-indigo-400"
                    >
                        <Briefcase size={18} /> Jobs
                    </a>
                    <a className="flex items-center gap-2 py-2 px-1 text-gray-700 font-medium hover:text-indigo-600 leading-7" href="#">
                        <Users size={18} /> Candidates
                    </a>
                    <a className="flex items-center gap-2 py-2 px-1 text-gray-700 font-medium hover:text-indigo-600 leading-7" href="#">
                        <ClipboardList size={18} /> Assessments
                    </a>
                    <a className="flex items-center gap-2 py-2 px-1 text-gray-700 font-medium hover:text-indigo-600 leading-7" href="#">
                        <UserIcon size={18} /> Profile
                    </a>
                </nav>
            </div>
        </aside>
    );
}
