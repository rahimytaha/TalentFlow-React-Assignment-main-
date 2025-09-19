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

const candidateNotes = [
    {
        id: 1,
        author: "@Sarah Johnson",
        role: "Frontend Dev",
        avatar: "/img-10.png",
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
        avatar: "/img-12.png",
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
        avatar: "/img-39.png",
        content: "Initial screening call completed.",
        time: "3 days ago",
        mentions: ["@lisa-wong"],
        bgColor: "bg-green-50",
        borderColor: "border-green-100",
    },
];

const initialAppliedCandidates = [
    {
        id: "candidate-1",
        name: "Sarah Johnson",
        position: "Senior UX Designer",
        avatar: "/img-38.png",
        appliedTime: "Applied 2 days ago",
        workType: "Remote",
        workTypeColor: "bg-green-100 text-green-800",
        email: "sarah.j@email.com",
    },
    {
        id: "candidate-2",
        name: "Mike Chen",
        position: "Frontend Developer",
        avatar: "/img-10.png",
        appliedTime: "Applied 3 days ago",
        workType: "Hybrid",
        workTypeColor: "bg-blue-100 text-blue-800",
        email: "mike.chen@email.com",
    },
    {
        id: "candidate-3",
        name: "Lisa Wang",
        position: "Product Manager",
        avatar: "/img-12.png",
        appliedTime: "Applied 1 week ago",
        workType: "On-site",
        workTypeColor: "bg-purple-100 text-purple-800",
        email: "lisa.wang@email.com",
    },
    {
        id: "candidate-4",
        name: "David Smith",
        position: "Backend Developer",
        avatar: "/img-9.png",
        appliedTime: "Applied 5 days ago",
        workType: "Remote",
        workTypeColor: "bg-green-100 text-green-800",
        email: "david.smith@email.com",
    },
];

const initialScreeningCandidates = [
    {
        id: "candidate-5",
        name: "Emma Davis",
        position: "UI Designer",
        avatar: "/img-19.png",
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
        avatar: "/img-37.png",
        status: "Initial review completed",
        workType: "Hybrid",
        workTypeColor: "bg-blue-100 text-blue-800",
        email: "alex.brown@email.com",
    },
];

const initialInterviewingCandidates = [
    {
        id: "candidate-7",
        name: "Jessica Lee",
        position: "Data Scientist",
        avatar: "/img-27.png",
        status: "Technical interview",
        workType: "Remote",
        workTypeColor: "bg-green-100 text-green-800",
        email: "jessica.lee@email.com",
        scheduledTime: "Today at 3:30 PM",
    },
    {
        id: "candidate-8",
        name: "Tom Wilson",
        position: "DevOps Engineer",
        avatar: "/img-39.png",
        status: "Panel interview scheduled",
        workType: "On-site",
        workTypeColor: "bg-purple-100 text-purple-800",
        email: "tom.wilson@email.com",
    },
    {
        id: "candidate-9",
        name: "Maria Garcia",
        position: "Marketing Manager",
        avatar: "/img-29.png",
        status: "Final interview pending",
        workType: "Hybrid",
        workTypeColor: "bg-blue-100 text-blue-800",
        email: "maria.garcia@email.com",
    },
];

const initialOfferedCandidates = [
    {
        id: "candidate-10",
        name: "Robert Jones",
        position: "Senior Developer",
        avatar: "/img-37.png",
        status: "Offer sent",
        workType: "Remote",
        workTypeColor: "bg-green-100 text-green-800",
        email: "robert.jones@email.com",
        salary: "$95,000/year",
    },
];

const initialHiredCandidates = [
    {
        id: "candidate-11",
        name: "Anna Taylor",
        position: "Product Designer",
        avatar: "/img-38.png",
        status: "Starts next Monday",
        workType: "Remote",
        workTypeColor: "bg-green-100 text-green-800",
        email: "anna.taylor@email.com",
        contractStatus: "Contract signed",
    },
    {
        id: "candidate-12",
        name: "John Martinez",
        position: "Sales Manager",
        avatar: "/img-39.png",
        status: "Started 2 weeks ago",
        workType: "On-site",
        workTypeColor: "bg-purple-100 text-purple-800",
        email: "john.martinez@email.com",
        onboardingStatus: "Onboarding complete",
    },
];

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


                    <div className="flex flex-1">
                        {/* <aside className="w-64 bg-white border-r shadow-sm">
          <nav className="p-6">
            <div className="space-y-2">
              {navigationItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-base font-medium [font-family:'Inter',Helvetica] ${
                    item.active
                      ? "bg-blue-50 text-gray-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <img className="w-5 h-5" src={item.icon} alt="" />
                  {item.name}
                </div>
              ))}
            </div>
          </nav>

          <div className="border-t">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-normal text-black [font-family:'Roboto_Mono',Helvetica]">
                  Candidate Notes
                </h3>
                <Button variant="ghost" size="sm" className="h-auto p-0">
                  <img className="w-[35px] h-[35px]" alt="Div" src="/div.svg" />
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
                      <Button variant="ghost" size="sm" className="h-auto p-0">
                        <img
                          className="w-4 h-4"
                          alt="Button"
                          src="/button-32.svg"
                        />
                      </Button>
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
          </div>
        </aside> */}
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
                                                    <img className="w-[52px] h-6" alt="Div" src="/div-1.svg" />
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
                                                                                    <img
                                                                                        className="w-[18px] h-6"
                                                                                        alt="Button"
                                                                                        src="/button-3.svg"
                                                                                    />
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

                                                        <div className="flex items-center justify-center gap-2 py-4">
                                                            <img
                                                                className="w-[22.14px] h-[22.14px]"
                                                                alt="Loading"
                                                                src="/svg.svg"
                                                            />
                                                            <span className="text-base text-gray-500 [font-family:'Roboto',Helvetica] no-select">
                                                                Loading more candidates...
                                                            </span>
                                                        </div>

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