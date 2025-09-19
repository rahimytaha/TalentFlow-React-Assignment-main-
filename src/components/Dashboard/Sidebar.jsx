import React from "react";
import { Home, Briefcase, Users, ClipboardList, User as UserIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
export default function Sidebar() {
    return (
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col pt-16">
            <div className="p-6 flex-1">
                <nav className="space-y-4">

                    <NavLink
                        to={"/dashboard"}
                        className={({ isActive, isPending }) => `flex ${isActive ? " bg-indigo-100 text-indigo-600 hover:bg-indigo-200" : " text-gray-700 hover:text-indigo-600 "} items-center rounded-md  py-2 px-1 gap-2  font-medium  leading-7`}
                    >
                        <Briefcase size={18} /> Jobs
                    </NavLink>
                    <NavLink to="/Candidates" className={({ isActive, isPending }) => `flex ${isActive ? " bg-indigo-100 text-indigo-600 hover:bg-indigo-200" : " text-gray-700 hover:text-indigo-600 "} items-center rounded-md  py-2 px-1 gap-2  font-medium  leading-7`} href="#">
                        <Users size={18} /> Candidates
                    </NavLink>
                    <NavLink to={"/Assessments"} className={({ isActive, isPending }) => `flex ${isActive ? " bg-indigo-100 text-indigo-600 hover:bg-indigo-200" : " text-gray-700 hover:text-indigo-600 "} items-center rounded-md  py-2 px-1 gap-2  font-medium  leading-7`}>
                        <ClipboardList size={18} /> Assessments
                    </NavLink>

                </nav>
            </div>
        </aside>
    );
}
