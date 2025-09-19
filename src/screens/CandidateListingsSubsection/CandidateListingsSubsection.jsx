import {
    CalendarIcon,
    DollarSignIcon,
    FileCheckIcon,
    MailIcon,
    MoreHorizontalIcon,
    PlusIcon,
    SearchIcon,
    UserCheckIcon,
} from "lucide-react";
import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "../../components/ui2/avatar";
import { Badge } from "../../components/ui2/badge";
import { Button } from "../../components/ui2/button";
import { Card, CardContent } from "../../components/ui2/card";
import { Input } from "../../components/ui2/input";
import Sidebar from "../../components/Dashboard/Sidebar";
import Header from "../../components/Dashboard/Header";

const navigationItems = [
    { name: "Dashboard", icon: "/frame-1.svg", active: false },
    { name: "Jobs", icon: "/frame-1.svg", active: false },
    { name: "Candidates", icon: "/frame-1.svg", active: true },
    { name: "Assessments", icon: "/frame-1.svg", active: false },
    { name: "Profile", icon: "/frame-1.svg", active: false },
];


const initialAppliedCandidates = [
    {
        "id": "candidate-1",
        "name": "Emily Johnson",
        "position": "Software Engineer",
        "avatar": "/img-3.png",
        "status": "Offer accepted",
        "workType": "Remote",
        "workTypeColor": "bg-green-100 text-green-800",
        "email": "emily.johnson@email.com",
        "contractStatus": "Contract pending"
    },
    {
        "id": "candidate-2",
        "name": "Michael Smith",
        "position": "Marketing Specialist",
        "avatar": "/img-4.png",
        "status": "In training",
        "workType": "On-site",
        "workTypeColor": "bg-purple-100 text-purple-800",
        "email": "michael.smith@email.com",
        "onboardingStatus": "In progress"
    },
    {
        "id": "candidate-3",
        "name": "Sophia Lee",
        "position": "Data Analyst",
        "avatar": "/img-3.png",
        "status": "Starts in two weeks",
        "workType": "Remote",
        "workTypeColor": "bg-green-100 text-green-800",
        "email": "sophia.lee@email.com",
        "contractStatus": "Contract signed"
    },
    {
        "id": "candidate-4",
        "name": "David Brown",
        "position": "Project Manager",
        "avatar": "/img-4.png",
        "status": "Started last month",
        "workType": "On-site",
        "workTypeColor": "bg-purple-100 text-purple-800",
        "email": "david.brown@email.com",
        "onboardingStatus": "Onboarding complete"
    },
    {
        "id": "candidate-5",
        "name": "Olivia Davis",
        "position": "UX Designer",
        "avatar": "/img-3.png",
        "status": "Interview completed",
        "workType": "Remote",
        "workTypeColor": "bg-green-100 text-green-800",
        "email": "olivia.davis@email.com",
        "contractStatus": "Offer extended"
    },
    {
        "id": "candidate-6",
        "name": "James Wilson",
        "position": "Financial Analyst",
        "avatar": "/img-4.png",
        "status": "Probation period",
        "workType": "On-site",
        "workTypeColor": "bg-purple-100 text-purple-800",
        "email": "james.wilson@email.com",
        "onboardingStatus": "In progress"
    },
    {
        "id": "candidate-7",
        "name": "Isabella Garcia",
        "position": "HR Coordinator",
        "avatar": "/img-3.png",
        "status": "Starts tomorrow",
        "workType": "Remote",
        "workTypeColor": "bg-green-100 text-green-800",
        "email": "isabella.garcia@email.com",
        "contractStatus": "Contract signed"
    },
    {
        "id": "candidate-8",
        "name": "William Rodriguez",
        "position": "DevOps Engineer",
        "avatar": "/img-4.png",
        "status": "Started 1 week ago",
        "workType": "On-site",
        "workTypeColor": "bg-purple-100 text-purple-800",
        "email": "william.rodriguez@email.com",
        "onboardingStatus": "Onboarding complete"
    },
    {
        "id": "candidate-9",
        "name": "Mia Hernandez",
        "position": "Content Writer",
        "avatar": "/img-3.png",
        "status": "Background check pending",
        "workType": "Remote",
        "workTypeColor": "bg-green-100 text-green-800",
        "email": "mia.hernandez@email.com",
        "contractStatus": "Contract ready"
    },
    {
        "id": "candidate-10",
        "name": "Alexander Lopez",
        "position": "Operations Manager",
        "avatar": "/img-4.png",
        "status": "In orientation",
        "workType": "On-site",
        "workTypeColor": "bg-purple-100 text-purple-800",
        "email": "alexander.lopez@email.com",
        "onboardingStatus": "In progress"
    },
    {
        "id": "candidate-13",
        "name": "Charlotte King",
        "position": "Graphic Designer",
        "avatar": "/img-3.png",
        "status": "Starts next week",
        "workType": "Remote",
        "workTypeColor": "bg-green-100 text-green-800",
        "email": "charlotte.king@email.com",
        "contractStatus": "Contract signed"
    },
    {
        "id": "candidate-14",
        "name": "Daniel Scott",
        "position": "Business Development",
        "avatar": "/img-4.png",
        "status": "Started 3 weeks ago",
        "workType": "On-site",
        "workTypeColor": "bg-purple-100 text-purple-800",
        "email": "daniel.scott@email.com",
        "onboardingStatus": "Onboarding complete"
    }
]

const initialScreeningCandidates = [
    {
        id: "candidate-5",
        name: "Emma Davis",
        position: "UI Designer",
        avatar: "/img-1.png",
        status: "Phone screen scheduled",
        workType: "Remote",
        workTypeColor: "bg-green-100 text-green-800",
        email: "emma.davis@email.com",
        scheduledTime: "Tomorrow at 2:00 PM",
    },
    {
        id: "candidate-6",
        name: "Alex Brown",
        position: "Full Stack Developer",
        avatar: "/img-3.png",
        status: "Initial review completed",
        workType: "Hybrid",
        workTypeColor: "bg-blue-100 text-blue-800",
        email: "alex.brown@email.com",
    },
];

const initialInterviewingCandidates = [
    {
        "id": "candidate-1",
        "name": "Emily Johnson",
        "position": "Software Engineer",
        "avatar": "/img-3.png",
        "status": "Offer accepted",
        "workType": "Remote",
        "workTypeColor": "bg-green-100 text-green-800",
        "email": "emily.johnson@email.com",
        "contractStatus": "Contract pending"
    },
    {
        "id": "candidate-2",
        "name": "Michael Smith",
        "position": "Marketing Specialist",
        "avatar": "/img-4.png",
        "status": "In training",
        "workType": "On-site",
        "workTypeColor": "bg-purple-100 text-purple-800",
        "email": "michael.smith@email.com",
        "onboardingStatus": "In progress"
    },
    {
        "id": "candidate-3",
        "name": "Sophia Lee",
        "position": "Data Analyst",
        "avatar": "/img-3.png",
        "status": "Starts in two weeks",
        "workType": "Remote",
        "workTypeColor": "bg-green-100 text-green-800",
        "email": "sophia.lee@email.com",
        "contractStatus": "Contract signed"
    },
    {
        "id": "candidate-4",
        "name": "David Brown",
        "position": "Project Manager",
        "avatar": "/img-4.png",
        "status": "Started last month",
        "workType": "On-site",
        "workTypeColor": "bg-purple-100 text-purple-800",
        "email": "david.brown@email.com",
        "onboardingStatus": "Onboarding complete"
    },
    {
        "id": "candidate-5",
        "name": "Olivia Davis",
        "position": "UX Designer",
        "avatar": "/img-3.png",
        "status": "Interview completed",
        "workType": "Remote",
        "workTypeColor": "bg-green-100 text-green-800",
        "email": "olivia.davis@email.com",
        "contractStatus": "Offer extended"
    },
    {
        "id": "candidate-6",
        "name": "James Wilson",
        "position": "Financial Analyst",
        "avatar": "/img-4.png",
        "status": "Probation period",
        "workType": "On-site",
        "workTypeColor": "bg-purple-100 text-purple-800",
        "email": "james.wilson@email.com",
        "onboardingStatus": "In progress"
    },
    {
        "id": "candidate-7",
        "name": "Isabella Garcia",
        "position": "HR Coordinator",
        "avatar": "/img-3.png",
        "status": "Starts tomorrow",
        "workType": "Remote",
        "workTypeColor": "bg-green-100 text-green-800",
        "email": "isabella.garcia@email.com",
        "contractStatus": "Contract signed"
    },
    {
        "id": "candidate-8",
        "name": "William Rodriguez",
        "position": "DevOps Engineer",
        "avatar": "/img-4.png",
        "status": "Started 1 week ago",
        "workType": "On-site",
        "workTypeColor": "bg-purple-100 text-purple-800",
        "email": "william.rodriguez@email.com",
        "onboardingStatus": "Onboarding complete"
    },
    {
        "id": "candidate-9",
        "name": "Mia Hernandez",
        "position": "Content Writer",
        "avatar": "/img-3.png",
        "status": "Background check pending",
        "workType": "Remote",
        "workTypeColor": "bg-green-100 text-green-800",
        "email": "mia.hernandez@email.com",
        "contractStatus": "Contract ready"
    },
    {
        "id": "candidate-10",
        "name": "Alexander Lopez",
        "position": "Operations Manager",
        "avatar": "/img-4.png",
        "status": "In orientation",
        "workType": "On-site",
        "workTypeColor": "bg-purple-100 text-purple-800",
        "email": "alexander.lopez@email.com",
        "onboardingStatus": "In progress"
    },
    {
        "id": "candidate-13",
        "name": "Charlotte King",
        "position": "Graphic Designer",
        "avatar": "/img-3.png",
        "status": "Starts next week",
        "workType": "Remote",
        "workTypeColor": "bg-green-100 text-green-800",
        "email": "charlotte.king@email.com",
        "contractStatus": "Contract signed"
    },
    {
        "id": "candidate-14",
        "name": "Daniel Scott",
        "position": "Business Development",
        "avatar": "/img-4.png",
        "status": "Started 3 weeks ago",
        "workType": "On-site",
        "workTypeColor": "bg-purple-100 text-purple-800",
        "email": "daniel.scott@email.com",
        "onboardingStatus": "Onboarding complete"
    }
]


const initialOfferedCandidates = [
    {
        "id": "candidate-15",
        "name": "Liam Thompson",
        "position": "Backend Developer",
        "avatar": "/img-4.png",
        "status": "Offer accepted",
        "workType": "Remote",
        "workTypeColor": "bg-green-100 text-green-800",
        "email": "liam.thompson@email.com",
        "contractStatus": "Contract pending"
    },
    {
        "id": "candidate-16",
        "name": "Ava White",
        "position": "Customer Success Manager",
        "avatar": "/img-4.png",
        "status": "Started last week",
        "workType": "On-site",
        "workTypeColor": "bg-purple-100 text-purple-800",
        "email": "ava.white@email.com",
        "onboardingStatus": "In progress"
    },
    {
        "id": "candidate-17",
        "name": "Noah Clark",
        "position": "Frontend Developer",
        "avatar": "/img-4.png",
        "status": "Starts next month",
        "workType": "Remote",
        "workTypeColor": "bg-green-100 text-green-800",
        "email": "noah.clark@email.com",
        "contractStatus": "Contract signed"
    },
    {
        "id": "candidate-18",
        "name": "Emma Lewis",
        "position": "Social Media Manager",
        "avatar": "/img-4.png",
        "status": "In onboarding",
        "workType": "On-site",
        "workTypeColor": "bg-purple-100 text-purple-800",
        "email": "emma.lewis@email.com",
        "onboardingStatus": "Onboarding complete"
    },
    {
        "id": "candidate-19",
        "name": "Lucas Walker",
        "position": "System Administrator",
        "avatar": "/img-4.png",
        "status": "Background check completed",
        "workType": "Remote",
        "workTypeColor": "bg-green-100 text-green-800",
        "email": "lucas.walker@email.com",
        "contractStatus": "Contract ready"
    },
    {
        "id": "candidate-20",
        "name": "Amelia Hall",
        "position": "Product Manager",
        "avatar": "/img-4.png",
        "status": "Starts in 3 days",
        "workType": "On-site",
        "workTypeColor": "bg-purple-100 text-purple-800",
        "email": "amelia.hall@email.com",
        "contractStatus": "Contract signed"
    },
    {
        "id": "candidate-21",
        "name": "Ethan Allen",
        "position": "Quality Assurance Engineer",
        "avatar": "/img-4.png",
        "status": "In training",
        "workType": "Remote",
        "workTypeColor": "bg-green-100 text-green-800",
        "email": "ethan.allen@email.com",
        "onboardingStatus": "In progress"
    },
    {
        "id": "candidate-22",
        "name": "Harper Young",
        "position": "SEO Specialist",
        "avatar": "/img-4.png",
        "status": "Started 2 days ago",
        "workType": "On-site",
        "workTypeColor": "bg-purple-100 text-purple-800",
        "email": "harper.young@email.com",
        "onboardingStatus": "Onboarding complete"
    },
    {
        "id": "candidate-23",
        "name": "Mason King",
        "position": "Database Administrator",
        "avatar": "/img-4.png",
        "status": "Offer extended",
        "workType": "Remote",
        "workTypeColor": "bg-green-100 text-green-800",
        "email": "mason.king@email.com",
        "contractStatus": "Contract pending"
    },
    {
        "id": "candidate-24",
        "name": "Evelyn Wright",
        "position": "Technical Writer",
        "avatar": "/img-4.png",
        "status": "Interview scheduled",
        "workType": "On-site",
        "workTypeColor": "bg-purple-100 text-purple-800",
        "email": "evelyn.wright@email.com",
        "contractStatus": "Not started"
    }
]

const initialHiredCandidates = [
    {
        "id": "candidate-1",
        "name": "Emily Johnson",
        "position": "Software Engineer",
        "avatar": "/img-3.png",
        "status": "Offer accepted",
        "workType": "Remote",
        "workTypeColor": "bg-green-100 text-green-800",
        "email": "emily.johnson@email.com",
        "contractStatus": "Contract pending"
    },
    {
        "id": "candidate-2",
        "name": "Michael Smith",
        "position": "Marketing Specialist",
        "avatar": "/img-4.png",
        "status": "In training",
        "workType": "On-site",
        "workTypeColor": "bg-purple-100 text-purple-800",
        "email": "michael.smith@email.com",
        "onboardingStatus": "In progress"
    },
    {
        "id": "candidate-3",
        "name": "Sophia Lee",
        "position": "Data Analyst",
        "avatar": "/img-3.png",
        "status": "Starts in two weeks",
        "workType": "Remote",
        "workTypeColor": "bg-green-100 text-green-800",
        "email": "sophia.lee@email.com",
        "contractStatus": "Contract signed"
    },
    {
        "id": "candidate-4",
        "name": "David Brown",
        "position": "Project Manager",
        "avatar": "/img-4.png",
        "status": "Started last month",
        "workType": "On-site",
        "workTypeColor": "bg-purple-100 text-purple-800",
        "email": "david.brown@email.com",
        "onboardingStatus": "Onboarding complete"
    },
    {
        "id": "candidate-5",
        "name": "Olivia Davis",
        "position": "UX Designer",
        "avatar": "/img-3.png",
        "status": "Interview completed",
        "workType": "Remote",
        "workTypeColor": "bg-green-100 text-green-800",
        "email": "olivia.davis@email.com",
        "contractStatus": "Offer extended"
    },
    {
        "id": "candidate-6",
        "name": "James Wilson",
        "position": "Financial Analyst",
        "avatar": "/img-4.png",
        "status": "Probation period",
        "workType": "On-site",
        "workTypeColor": "bg-purple-100 text-purple-800",
        "email": "james.wilson@email.com",
        "onboardingStatus": "In progress"
    },
    {
        "id": "candidate-7",
        "name": "Isabella Garcia",
        "position": "HR Coordinator",
        "avatar": "/img-3.png",
        "status": "Starts tomorrow",
        "workType": "Remote",
        "workTypeColor": "bg-green-100 text-green-800",
        "email": "isabella.garcia@email.com",
        "contractStatus": "Contract signed"
    },
    {
        "id": "candidate-8",
        "name": "William Rodriguez",
        "position": "DevOps Engineer",
        "avatar": "/img-4.png",
        "status": "Started 1 week ago",
        "workType": "On-site",
        "workTypeColor": "bg-purple-100 text-purple-800",
        "email": "william.rodriguez@email.com",
        "onboardingStatus": "Onboarding complete"
    },
    {
        "id": "candidate-9",
        "name": "Mia Hernandez",
        "position": "Content Writer",
        "avatar": "/img-3.png",
        "status": "Background check pending",
        "workType": "Remote",
        "workTypeColor": "bg-green-100 text-green-800",
        "email": "mia.hernandez@email.com",
        "contractStatus": "Contract ready"
    },
    {
        "id": "candidate-10",
        "name": "Alexander Lopez",
        "position": "Operations Manager",
        "avatar": "/img-4.png",
        "status": "In orientation",
        "workType": "On-site",
        "workTypeColor": "bg-purple-100 text-purple-800",
        "email": "alexander.lopez@email.com",
        "onboardingStatus": "In progress"
    },
    {
        "id": "candidate-13",
        "name": "Charlotte King",
        "position": "Graphic Designer",
        "avatar": "/img-3.png",
        "status": "Starts next week",
        "workType": "Remote",
        "workTypeColor": "bg-green-100 text-green-800",
        "email": "charlotte.king@email.com",
        "contractStatus": "Contract signed"
    },
    {
        "id": "candidate-14",
        "name": "Daniel Scott",
        "position": "Business Development",
        "avatar": "/img-4.png",
        "status": "Started 3 weeks ago",
        "workType": "On-site",
        "workTypeColor": "bg-purple-100 text-purple-800",
        "email": "daniel.scott@email.com",
        "onboardingStatus": "Onboarding complete"
    }
]

export const CandidateListingsSubsection = () => {
    const [candidates, setCandidates] = useState({
        applied: initialAppliedCandidates,
        screening: initialScreeningCandidates,
        interviewing: initialInterviewingCandidates,
        offered: initialOfferedCandidates,
        hired: initialHiredCandidates,
    });

    const stages = [
        {
            id: "applied",
            name: "Applied",
            count: candidates.applied.length,
            color: "bg-gray-400",
            candidates: candidates.applied,
        },
        {
            id: "screening",
            name: "Screening",
            count: candidates.screening.length,
            color: "bg-yellow-400",
            candidates: candidates.screening,
        },
        {
            id: "interviewing",
            name: "Interviewing",
            count: candidates.interviewing.length,
            color: "bg-orange-400",
            candidates: candidates.interviewing,
        },
        {
            id: "offered",
            name: "Offered",
            count: candidates.offered.length,
            color: "bg-blue-400",
            candidates: candidates.offered,
        },
        {
            id: "hired",
            name: "Hired",
            count: candidates.hired.length,
            color: "bg-green-500",
            candidates: candidates.hired,
        },
    ];

    const updateCandidateForStage = (candidate, stageId) => {
        const updatedCandidate = { ...candidate };

        // Clear previous stage-specific properties
        delete updatedCandidate.appliedTime;
        delete updatedCandidate.status;
        delete updatedCandidate.scheduledTime;
        delete updatedCandidate.salary;
        delete updatedCandidate.contractStatus;
        delete updatedCandidate.onboardingStatus;

        switch (stageId) {
            case 'applied':
                updatedCandidate.appliedTime = `Applied ${Math.floor(Math.random() * 7) + 1} days ago`;
                break;
            case 'screening':
                updatedCandidate.status = 'Phone screen scheduled';
                updatedCandidate.scheduledTime = 'Tomorrow at 2:00 PM';
                break;
            case 'interviewing':
                updatedCandidate.status = 'Technical interview';
                updatedCandidate.scheduledTime = 'Today at 3:30 PM';
                break;
            case 'offered':
                updatedCandidate.status = 'Offer sent';
                updatedCandidate.salary = '$95,000/year';
                break;
            case 'hired':
                updatedCandidate.status = 'Starts next Monday';
                updatedCandidate.contractStatus = 'Contract signed';
                break;
            default:
                break;
        }

        return updatedCandidate;
    };

    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        // If no destination, return
        if (!destination) {
            return;
        }

        // If dropped in the same position, return
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const sourceStageId = source.droppableId;
        const destStageId = destination.droppableId;

        const sourceCandidates = Array.from(candidates[sourceStageId]);
        const destCandidates = sourceStageId === destStageId
            ? sourceCandidates
            : Array.from(candidates[destStageId]);

        // Find the candidate being moved
        const candidateToMove = sourceCandidates.find(c => c.id === draggableId);

        if (!candidateToMove) return;

        // Remove from source
        sourceCandidates.splice(source.index, 1);

        // Update candidate properties based on destination stage
        const updatedCandidate = updateCandidateForStage(candidateToMove, destStageId);

        // Add to destination
        destCandidates.splice(destination.index, 0, updatedCandidate);

        // Update state
        setCandidates({
            ...candidates,
            [sourceStageId]: sourceCandidates,
            [destStageId]: destCandidates,
        });
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header />
                <div className="flex mt-16 flex-col w-full h-full bg-gray-50 relative">
                    <div className="bg-white rounded-lg border-b border-gray-200 p-8 m-6">
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-4">
                                <div className="w-4 h-5">
                                    <NavLink to={"/Candidates"}>
                                        <img alt="Back" src="/i-8.svg" />
                                    </NavLink>

                                </div>
                                <h1 className="text-2xl font-medium text-black [font-family:'Roboto',Helvetica]">
                                    Manage Candidates
                                </h1>
                            </div>
                            <Button className="ml-auto text-white bg-blue-600 hover:bg-blue-700 h-auto">
                                Resume
                            </Button>
                        </div>
                        <div className="mt-4 text-sm text-gray-600 [font-family:'Roboto',Helvetica]">
                            Move candidates between stages
                        </div>
                    </div>

                    <div className="flex flex-1">
                       
                        <main className="flex-1 p-6">
                            <DragDropContext onDragEnd={onDragEnd}>
                                <div className="flex gap-4 h-full">
                                    {stages.map((stage) => (
                                        <div key={stage.id} className="flex-1 flex flex-col">
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="flex items-center gap-2">
                                                    <div className={`w-5 h-5 rounded-full ${stage.color}`} />
                                                    <span className="text-base font-medium text-black [font-family:'Roboto',Helvetica] no-select">
                                                        {stage.name}
                                                    </span>
                                                    <Badge
                                                        variant="secondary"
                                                        className="bg-gray-200 text-gray-700 text-xs [font-family:'Roboto',Helvetica] no-select"
                                                    >
                                                        {stage.count}
                                                    </Badge>
                                                </div>
                                                <Button variant="ghost" size="sm" className="h-auto p-0">
                                                    <svg width="52" height="24" viewBox="0 0 52 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M52 24H0V0H52V24Z" stroke="#E5E7EB" />
                                                        <path d="M20 0C22.2091 2.57702e-07 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 6.44266e-08 22.2091 0 20V4C2.57706e-07 1.79086 1.79086 6.44256e-08 4 0H20Z" stroke="#E5E7EB" />
                                                        <path d="M18.125 22H5.875V2H18.125V22Z" stroke="#E5E7EB" />
                                                        <path d="M18.125 18.75H5.875V4.75H18.125V18.75Z" stroke="#E5E7EB" />
                                                        <path d="M12.875 6.9375C12.875 6.45352 12.484 6.0625 12 6.0625C11.516 6.0625 11.125 6.45352 11.125 6.9375V10.875H7.1875C6.70352 10.875 6.3125 11.266 6.3125 11.75C6.3125 12.234 6.70352 12.625 7.1875 12.625H11.125V16.5625C11.125 17.0465 11.516 17.4375 12 17.4375C12.484 17.4375 12.875 17.0465 12.875 16.5625V12.625H16.8125C17.2965 12.625 17.6875 12.234 17.6875 11.75C17.6875 11.266 17.2965 10.875 16.8125 10.875H12.875V6.9375Z" fill="#6B7280" />
                                                        <path d="M48 0C50.2091 2.57702e-07 52 1.79086 52 4V20C52 22.2091 50.2091 24 48 24H32C29.7909 24 28 22.2091 28 20V4C28 1.79086 29.7909 6.44256e-08 32 0H48Z" stroke="#E5E7EB" />
                                                        <path d="M46.125 22H33.875V2H46.125V22Z" stroke="#E5E7EB" />
                                                        <path d="M46.125 18.75H33.875V4.75H46.125V18.75Z" stroke="#E5E7EB" />
                                                        <path d="M34.0938 11.75C34.0938 11.3439 34.2551 10.9544 34.5422 10.6672C34.8294 10.3801 35.2189 10.2188 35.625 10.2188C36.0311 10.2188 36.4206 10.3801 36.7078 10.6672C36.9949 10.9544 37.1562 11.3439 37.1562 11.75C37.1562 12.1561 36.9949 12.5456 36.7078 12.8328C36.4206 13.1199 36.0311 13.2812 35.625 13.2812C35.2189 13.2812 34.8294 13.1199 34.5422 12.8328C34.2551 12.5456 34.0938 12.1561 34.0938 11.75ZM38.4688 11.75C38.4688 11.3439 38.6301 10.9544 38.9172 10.6672C39.2044 10.3801 39.5939 10.2188 40 10.2188C40.4061 10.2188 40.7956 10.3801 41.0828 10.6672C41.3699 10.9544 41.5312 11.3439 41.5312 11.75C41.5312 12.1561 41.3699 12.5456 41.0828 12.8328C40.7956 13.1199 40.4061 13.2812 40 13.2812C39.5939 13.2812 39.2044 13.1199 38.9172 12.8328C38.6301 12.5456 38.4688 12.1561 38.4688 11.75ZM44.375 10.2188C44.7811 10.2188 45.1706 10.3801 45.4578 10.6672C45.7449 10.9544 45.9062 11.3439 45.9062 11.75C45.9062 12.1561 45.7449 12.5456 45.4578 12.8328C45.1706 13.1199 44.7811 13.2812 44.375 13.2812C43.9689 13.2812 43.5794 13.1199 43.2922 12.8328C43.0051 12.5456 42.8438 12.1561 42.8438 11.75C42.8438 11.3439 43.0051 10.9544 43.2922 10.6672C43.5794 10.3801 43.9689 10.2188 44.375 10.2188Z" fill="#6B7280" />
                                                    </svg>

                                                </Button>
                                            </div>

                                            <Droppable droppableId={stage.id}>
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.droppableProps}
                                                        className={`flex-1 space-y-3 overflow-y-auto p-2 rounded-lg transition-colors min-h-[200px] ${snapshot.isDraggingOver
                                                            ? 'bg-blue-50 border-2 border-blue-200 border-dashed'
                                                            : 'bg-transparent'
                                                            }`}
                                                    >
                                                        {stage.candidates.map((candidate, index) => (
                                                            <Draggable
                                                                key={candidate.id}
                                                                draggableId={candidate.id}
                                                                index={index}
                                                            >
                                                                {(provided, snapshot) => (
                                                                    <Card
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        className={`shadow-sm drag-handle no-select transition-all cursor-grab ${snapshot.isDragging
                                                                            ? 'shadow-lg rotate-2 scale-105 bg-white border-blue-300 cursor-grabbing'
                                                                            : 'hover:shadow-md'
                                                                            }`}
                                                                        style={{
                                                                            ...provided.draggableProps.style,
                                                                        }}
                                                                    >
                                                                        <CardContent className="p-4 no-select">
                                                                            <div className="flex items-start justify-between mb-3">
                                                                                <div className="flex items-center gap-3">
                                                                                    <Avatar className="w-10 h-10">
                                                                                        <AvatarImage src={candidate.avatar} />
                                                                                        <AvatarFallback>
                                                                                            {candidate.name[0]}
                                                                                        </AvatarFallback>
                                                                                    </Avatar>
                                                                                    <div>
                                                                                        <h4 className="text-base font-medium text-gray-900 [font-family:'Roboto',Helvetica] no-select">
                                                                                            {candidate.name}
                                                                                        </h4>
                                                                                        <p className="text-sm text-gray-600 [font-family:'Roboto',Helvetica] no-select">
                                                                                            {candidate.position}
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                                <Button
                                                                                    variant="ghost"
                                                                                    size="sm"
                                                                                    className="h-auto p-0"
                                                                                >
                                                                                    <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path d="M18 24H0V0H18V24Z" stroke="#E5E7EB" />
                                                                                        <path d="M18 21H0V2H18V21Z" stroke="#E5E7EB" />
                                                                                        <g clip-path="url(#clip0_204_10906)">
                                                                                            <path d="M8.99662 3C9.28412 3 9.54662 3.1625 9.67162 3.42188L11.8154 7.8375L16.6029 8.54375C16.8841 8.58437 17.1185 8.78125 17.206 9.05312C17.2935 9.325 17.2216 9.61875 17.0216 9.81875L13.5497 13.2625L14.3685 18.125C14.4154 18.4062 14.2997 18.6906 14.0685 18.8594C13.8372 19.0281 13.5279 19.0469 13.2779 18.9125L8.99662 16.625L4.71849 18.9094C4.46537 19.0438 4.15912 19.025 3.92787 18.8562C3.69662 18.6875 3.57787 18.4031 3.62474 18.1219L4.44349 13.2594L0.97162 9.81875C0.768495 9.61875 0.699745 9.32188 0.787245 9.05312C0.874745 8.78437 1.10912 8.5875 1.39037 8.54375L6.17787 7.8375L8.32162 3.42188C8.44974 3.1625 8.70912 3 8.99662 3ZM8.99662 5.46875L7.35599 8.85C7.24662 9.07188 7.03724 9.22813 6.79037 9.26562L3.09349 9.80937L5.77787 12.4688C5.94974 12.6406 6.03099 12.8844 5.99037 13.125L5.35599 16.8656L8.6435 15.1094C8.86537 14.9906 9.13099 14.9906 9.34974 15.1094L12.6372 16.8656L12.006 13.1281C11.9654 12.8875 12.0435 12.6438 12.2185 12.4719L14.9029 9.8125L11.206 9.26562C10.9622 9.22813 10.7497 9.075 10.6404 8.85L8.99662 5.46875Z" fill="#9CA3AF" />
                                                                                        </g>
                                                                                        <defs>
                                                                                            <clipPath id="clip0_204_10906">
                                                                                                <path d="M0 3H18V19H0V3Z" fill="white" />
                                                                                            </clipPath>
                                                                                        </defs>
                                                                                    </svg>

                                                                                </Button>
                                                                            </div>

                                                                            <div className="flex items-center justify-between mb-2">
                                                                                <span className="text-sm text-gray-500 [font-family:'Roboto',Helvetica] no-select">
                                                                                    {candidate.appliedTime || candidate.status}
                                                                                </span>
                                                                                <Badge
                                                                                    className={`text-xs ${candidate.workTypeColor} [font-family:'Roboto',Helvetica] no-select`}
                                                                                >
                                                                                    {candidate.workType}
                                                                                </Badge>
                                                                            </div>

                                                                            <div className="flex items-center gap-2 mb-2">
                                                                                <MailIcon className="w-3.5 h-5 text-gray-400" />
                                                                                <span className="text-sm text-gray-600 [font-family:'Roboto',Helvetica] no-select">
                                                                                    {candidate.email}
                                                                                </span>
                                                                            </div>

                                                                            {candidate.scheduledTime && (
                                                                                <div className="flex items-center gap-2 mb-2">
                                                                                    <CalendarIcon className="w-3.5 h-5 text-gray-400" />
                                                                                    <span className="text-sm text-orange-600 [font-family:'Roboto',Helvetica] no-select">
                                                                                        {candidate.scheduledTime}
                                                                                    </span>
                                                                                </div>
                                                                            )}

                                                                            {candidate.salary && (
                                                                                <div className="flex items-center gap-2 mb-2">
                                                                                    <DollarSignIcon className="w-3.5 h-5 text-gray-400" />
                                                                                    <span className="text-sm text-blue-600 [font-family:'Roboto',Helvetica] no-select">
                                                                                        {candidate.salary}
                                                                                    </span>
                                                                                </div>
                                                                            )}

                                                                            {candidate.contractStatus && (
                                                                                <div className="flex items-center gap-2 mb-2">
                                                                                    <FileCheckIcon className="w-3.5 h-5 text-gray-400" />
                                                                                    <span className="text-sm text-green-600 [font-family:'Roboto',Helvetica] no-select">
                                                                                        {candidate.contractStatus}
                                                                                    </span>
                                                                                </div>
                                                                            )}

                                                                            {candidate.onboardingStatus && (
                                                                                <div className="flex items-center gap-2">
                                                                                    <UserCheckIcon className="w-3.5 h-5 text-gray-400" />
                                                                                    <span className="text-sm text-green-600 [font-family:'Roboto',Helvetica] no-select">
                                                                                        {candidate.onboardingStatus}
                                                                                    </span>
                                                                                </div>
                                                                            )}
                                                                        </CardContent>
                                                                    </Card>
                                                                )}
                                                            </Draggable>
                                                        ))}
                                                        {provided.placeholder}



                                                        <Button
                                                            variant="outline"
                                                            className="w-full h-[42px] border-dashed border-gray-300 text-gray-500 [font-family:'Roboto',Helvetica]"
                                                        >
                                                            <PlusIcon className="w-3 h-3 mr-2" />
                                                            Add candidate
                                                        </Button>
                                                    </div>
                                                )}
                                            </Droppable>
                                        </div>
                                    ))}
                                </div>
                            </DragDropContext>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};