import React from "react";
import { Home, Briefcase, Users, ClipboardList, User as UserIcon, PlusIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Badge } from "../ui2/badge";
import { Button } from "../ui2/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui2/avatar";
import { Card, CardContent } from "../ui2/card";
export default function Sidebar() {
    const candidateNotes = [
        {
            id: 1,
            author: "@Sarah Johnson",
            role: "Frontend Dev",
            avatar: "/img-1.png",
            content:
                "Great technical interview. Strong React skills and excellent problem-solving approach...",
            time: "2 hours ago",
            mentions: ["@alex-smith"],
            bgColor: "bg-blue-50",
            borderColor: "border-blue-100",
        },
        {
            id: 2,
            author: "@Emily Davis",
            role: "UX Designer",
            avatar: "/img-1.png",
            content: "Excellent portfolio review. Impressive design thinking process.",
            time: "1 day ago",
            mentions: ["@mark-taylor", "@hr-team"],
            bgColor: "bg-orange-50",
            borderColor: "border-orange-100",
        },
        {
            id: 3,
            author: "@Michael Chen",
            role: "Backend Dev",
            avatar: "/img-3.png",
            content: "Initial screening call completed.",
            time: "3 days ago",
            mentions: ["@lisa-wong"],
            bgColor: "bg-green-50",
            borderColor: "border-green-100",
        },
    ];

    return (
        <aside className="w-80 bg-white border-r border-gray-200 flex flex-col pt-16">
            <div className="p-6 flex-1 max-h-52 ">
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

           {window.location.pathname=="/Candidates/Manage"&& <div className="border-t">
                <div className="py-4 px-3 border-b">
                    <div className="flex items-center justify-between mb-1">
                        <h3 className="text-lg font-normal text-black [font-family:'Roboto_Mono',Helvetica]">
                            Candidate Notes
                        </h3>
                        <Button variant="ghost" size="sm" className="h-auto p-0">
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27 0C31.4183 0 35 3.58172 35 8V27C35 31.4183 31.4183 35 27 35H8C3.58172 35 0 31.4183 0 27V8C0 3.58172 3.58172 0 8 0H27Z" fill="#F5F5F5" />
                                <path d="M27 0C31.4183 0 35 3.58172 35 8V27C35 31.4183 31.4183 35 27 35H8C3.58172 35 0 31.4183 0 27V8C0 3.58172 3.58172 0 8 0H27Z" stroke="#E5E7EB" />
                                <path d="M24 28H9V4H24V28Z" stroke="#E5E7EB" />
                                <path d="M27 26.25H9V8.25H27V26.25Z" stroke="#E5E7EB" />
                                <path d="M9.13693 10.1801C9.36896 9.68789 9.86114 9.375 10.4061 9.375H25.5936C26.1385 9.375 26.6307 9.68789 26.8627 10.1801C27.0947 10.6723 27.0244 11.2523 26.6799 11.6742L20.2498 19.5316V24C20.2498 24.4254 20.0108 24.8156 19.6276 25.0055C19.2443 25.1953 18.7908 25.1566 18.4498 24.9L16.1998 23.2125C15.9151 23.0016 15.7498 22.6676 15.7498 22.3125V19.5316L9.31622 11.6707C8.97521 11.2523 8.90138 10.6688 9.13693 10.1801Z" fill="#ADAEBC" />
                            </svg>

                        </Button>
                    </div>
                    <p className="text-sm text-gray-500 [font-family:'Roboto_Mono',Helvetica]">
                        3 notes
                    </p>
                </div>

                <div className="p-3 flex gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        className="h-9 bg-gray-100 text-gray-400 [font-family:'Roboto_Mono',Helvetica]"
                    >
                        @mention
                    </Button>
                    <Button
                        size="sm"
                        className="h-10 bg-blue-600 text-white [font-family:'Roboto_Mono',Helvetica]"
                    >
                        <PlusIcon className="w-3.5 h-3.5 mr-2" />
                        Add Note
                    </Button>
                </div>

                <div className="space-y-3 p-3 max-h-[569px] overflow-y-auto">
                    {candidateNotes.map((note) => (
                        <Card
                            key={note.id}
                            className={`${note.bgColor} ${note.borderColor} border`}
                        >
                            <CardContent className="p-3">
                                <div className="flex items-start gap-2 mb-3">
                                    <Avatar className="w-6 h-6">
                                        <AvatarImage src={note.avatar} />
                                        <AvatarFallback>{note.author[1]}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <div className="text-sm font-normal text-black [font-family:'Roboto_Mono',Helvetica]">
                                            {note.author}
                                            <br />- {note.role}
                                        </div>
                                    </div>

                                </div>

                                <p className="text-xs text-gray-600 mb-3 [font-family:'Roboto_Mono',Helvetica]">
                                    {note.content}
                                </p>

                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-500 [font-family:'Roboto_Mono',Helvetica]">
                                        {note.time}
                                    </span>
                                    <div className="flex gap-1">
                                        {note.mentions.map((mention, index) => (
                                            <Badge
                                                key={index}
                                                variant="secondary"
                                                className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-600 [font-family:'Roboto_Mono',Helvetica]"
                                            >
                                                {mention}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>}

        </aside>
    );
}
