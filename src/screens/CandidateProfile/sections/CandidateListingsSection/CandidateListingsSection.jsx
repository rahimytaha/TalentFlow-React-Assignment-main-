import {
  CheckCircleIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  SearchIcon,
  UsersIcon,
} from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import Sidebar from "../../../../components/Dashboard/Sidebar";
import Header from "../../../../components/Dashboard/Header";

const navigationItems = [
  { name: "Dashboard", active: false },
  { name: "Jobs", active: false },
  { name: "Candidates", active: true },
  { name: "Assessments", active: false },
  { name: "Profile", active: false },
];

const candidateSkills = ["React", "Node.js", "TypeScript", "AWS"];

const timelineEvents = [
  {
    id: 1,
    title: "Application Received",
    status: "Completed",
    statusColor: "bg-green-100 text-green-800",
    date: "March 15, 2024 - 9:30 AM",
    description:
      "Candidate applied through company website with resume and portfolio",
    details: [
      { icon: "system", text: "System" },
      { icon: "attachments", text: "2 attachments" },
    ],
    completed: true,
  },
  {
    id: 2,
    title: "Initial Screening",
    status: "Completed",
    statusColor: "bg-green-100 text-green-800",
    date: "March 16, 2024 - 2:15 PM",
    description:
      "HR team reviewed application and conducted initial phone screening",
    quote:
      "Strong background in UX design with excellent portfolio. Good communication skills and cultural fit.",
    interviewer: "Jennifer Martinez (HR)",
    duration: "30 min call",
    completed: true,
  },
  {
    id: 3,
    title: "Portfolio Review",
    status: "Completed",
    statusColor: "bg-green-100 text-green-800",
    date: "March 18, 2024 - 11:00 AM",
    description: "Design team reviewed candidate's portfolio and work samples",
    highlights: [
      "Strong user research methodology",
      "Clean, modern design aesthetic",
      "Good understanding of accessibility principles",
    ],
    interviewer: "David Kim (Design Lead)",
    result: "Positive Review",
    completed: true,
  },
  {
    id: 4,
    title: "First Round Interview",
    status: "Completed",
    statusColor: "bg-green-100 text-green-800",
    date: "March 20, 2024 - 3:00 PM",
    description: "Behavioral and culture fit interview with hiring manager",
    scores: [
      { category: "Communication", score: "4/5" },
      { category: "Problem Solving", score: "5/5" },
    ],
    interviewer: "Alex Thompson (Hiring Manager)",
    duration: "VideoIcon Call - 60 min",
    completed: true,
  },
  {
    id: 5,
    title: "Design Challenge",
    status: "Completed",
    statusColor: "bg-green-100 text-green-800",
    date: "March 22, 2024 - Submitted",
    description: "Take-home design challenge: Redesign mobile checkout flow",
    challengeResults: [
      { metric: "Design Quality", score: "95%" },
      { metric: "User Experience", score: "90%" },
      { metric: "Innovation", score: "88%" },
    ],
    duration: "3 days to complete",
    result: "Excellent Work",
    completed: true,
  },
  {
    id: 6,
    title: "Technical Interview",
    status: "In Progress",
    statusColor: "bg-blue-100 text-blue-800",
    date: "March 25, 2024 - 2:00 PM",
    description:
      "Deep dive into design process and technical skills with senior designers",
    scheduledInfo: "Scheduled for Tomorrow",
    panelInfo:
      "Interview panel: David Kim, Sarah Wilson, and Michael Rodriguez",
    interviewType: "Panel Interview",
    duration: "90 minutes",
    completed: false,
    current: true,
  },
  {
    id: 7,
    title: "Final Interview",
    status: "Pending",
    statusColor: "bg-gray-100 text-gray-600",
    date: "TBD",
    description:
      "Final interview with VP of Design and team culture fit assessment",
    interviewType: "Executive Interview",
    completed: false,
  },
  {
    id: 8,
    title: "Reference Check",
    status: "Pending",
    statusColor: "bg-gray-100 text-gray-600",
    date: "TBD",
    description: "Contact previous employers and references for verification",
    interviewType: "Reference Calls",
    completed: false,
  },
  {
    id: 9,
    title: "Final Decision",
    status: "Pending",
    statusColor: "bg-gray-100 text-gray-600",
    date: "TBD",
    description: "Make final hiring decision and extend offer if approved",
    interviewType: "Offer Extension",
    completed: false,
  },
];

export const CandidateListingsSection = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />

        <div className="w-full mt-16 h-full bg-white">


          <div className="flex h-full">


            <main className="flex-1 bg-gray-100">
              <div className="p-6 ">
                <div className="bg-white rounded-lg border-b border-gray-200 p-8 mb-6">
                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-5">
                        <img alt="Back" src="/i-8.svg" />
                      </div>
                      <h1 className="text-2xl font-medium text-black [font-family:'Roboto',Helvetica]">
                        Sarah Chen
                      </h1>
                    </div>
                    <Button className="ml-auto text-white bg-blue-600 hover:bg-blue-700 h-auto">
                      Resume
                    </Button>
                  </div>
                  <div className="mt-4 text-sm text-gray-600 [font-family:'Roboto',Helvetica]">
                    Product Design · Remote · San Francisco, CA
                  </div>
                </div>

                <div className="flex gap-4">
                  <Card className="w-96 h-fit">
                    <CardContent className="p-6">
                      <div className="flex gap-4 mb-6">
                        <Avatar className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600">
                          <AvatarImage src="/img-1.png" />
                          <AvatarFallback>SC</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h2 className="text-xl font-semibold text-black [font-family:'Roboto',Helvetica]">
                            Sarah Chen
                          </h2>
                          <p className="text-base text-gray-600 mt-1 [font-family:'Roboto',Helvetica]">
                            Senior UX Designer
                          </p>

                          <div className="flex items-center gap-2 mt-2 text-sm text-gray-500 [font-family:'Roboto',Helvetica]">
                            <MapPinIcon className="w-4 h-4" />
                            San Francisco, CA
                          </div>

                          <div className="flex items-center gap-2 mt-2 text-sm text-gray-500 [font-family:'Roboto',Helvetica]">
                            <MailIcon className="w-4 h-4" />
                            sarah.chen@email.com
                          </div>

                          <div className="mt-3">
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                              #referral
                            </Badge>
                          </div>

                          <div className="mt-3 text-xs text-gray-500 [font-family:'Roboto',Helvetica]">
                            via Michael Johnson ·
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full" />
                          <span className="font-medium text-blue-900 [font-family:'Roboto',Helvetica]">
                            Current Stage: Technical Interview
                          </span>
                        </div>
                        <p className="text-sm text-blue-800 [font-family:'Roboto',Helvetica]">
                          Scheduled for Tomorrow, 2:00 PM - 3:30 PM
                        </p>
                      </div>

                      <div className="flex gap-2.5 mb-6">
                        <Button className="flex-1 text-white bg-blue-600 hover:bg-blue-700 h-auto">
                          Move Stage
                        </Button>
                        <Button variant="outline" size="icon" className="w-9 h-10">
                          <img
                            src="/button-4.svg"
                            alt="Action"
                            className="w-4 h-4"
                          />
                        </Button>
                        <Button variant="outline" size="icon" className="w-9 h-10">
                          <img
                            src="/button-1.svg"
                            alt="Action"
                            className="w-4 h-4"
                          />
                        </Button>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-center gap-3 text-gray-600 [font-family:'Roboto',Helvetica]">
                          <MapPinIcon className="w-3 h-4" />
                          San Francisco, CA
                        </div>
                        <div className="flex items-center gap-3 text-gray-600 [font-family:'Roboto',Helvetica]">
                          <ClockIcon className="w-3 h-3" />8 years experience
                        </div>
                        <div className="flex items-center gap-3 text-gray-600 [font-family:'Roboto',Helvetica]">
                          <span className="w-2 h-4 text-center">$</span>
                          $140K - $180K
                        </div>
                      </div>

                      <div className="mb-6">
                        <h3 className="font-medium text-gray-900 mb-3 [font-family:'Roboto',Helvetica]">
                          About :
                        </h3>
                        <p className="text-sm text-gray-700 leading-5 [font-family:'Roboto',Helvetica]">
                          Experienced full-stack engineer with expertise in
                          <br />
                          building scalable web applications. Previously at
                          <br />
                          Google , looking for&nbsp;&nbsp;IC roles at growth-stage
                          <br />
                          companies.
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {candidateSkills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-blue-100 text-blue-800 hover:bg-blue-100"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="text-xs text-gray-500 [font-family:'Roboto',Helvetica]">
                        Last active: 2 days ago
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="flex-1">
                    <CardHeader className="border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-black [font-family:'Roboto',Helvetica]">
                          Recruitment Timeline
                        </h2>
                        <Button className="bg-purple-600 text-white hover:bg-purple-700 h-auto">
                          Add Note
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="relative">
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />

                        <div className="space-y-8">
                          {timelineEvents.map((event, index) => (
                            <div key={event.id} className="relative flex gap-4">
                              <div
                                className={`relative z-10 w-4 h-4 rounded-full border-2 border-white shadow-sm ${event.completed
                                    ? "bg-green-500"
                                    : event.current
                                      ? "bg-blue-500 opacity-50"
                                      : "bg-gray-300"
                                  }`}
                              />

                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center gap-3">
                                    <h3
                                      className={`font-medium text-base [font-family:'Roboto',Helvetica] ${event.completed || event.current
                                          ? "text-gray-900"
                                          : "text-gray-400"
                                        }`}
                                    >
                                      {event.title}
                                    </h3>
                                    <Badge className={event.statusColor}>
                                      {event.status}
                                    </Badge>
                                  </div>
                                  <span
                                    className={`text-sm [font-family:'Roboto',Helvetica] ${event.completed || event.current
                                        ? "text-gray-500"
                                        : "text-gray-400"
                                      }`}
                                  >
                                    {event.date}
                                  </span>
                                </div>

                                <p
                                  className={`text-sm mb-3 [font-family:'Roboto',Helvetica] ${event.completed || event.current
                                      ? "text-gray-600"
                                      : "text-gray-400"
                                    }`}
                                >
                                  {event.description}
                                </p>

                                {event.quote && (
                                  <div className="bg-gray-50 rounded-lg p-3 mb-3">
                                    <p className="text-sm text-gray-700 [font-family:'Roboto',Helvetica]">
                                      "{event.quote}"
                                    </p>
                                  </div>
                                )}

                                {event.highlights && (
                                  <div className="bg-blue-50 rounded-lg p-3 mb-3">
                                    <p className="font-medium text-blue-800 text-sm mb-2 [font-family:'Roboto',Helvetica]">
                                      Portfolio Highlights:
                                    </p>
                                    <ul className="space-y-1">
                                      {event.highlights.map((highlight, idx) => (
                                        <li
                                          key={idx}
                                          className="text-sm text-blue-700 ml-5 [font-family:'Roboto',Helvetica]"
                                        >
                                          {highlight}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {event.scores && (
                                  <div className="flex gap-4 mb-3">
                                    {event.scores.map((score, idx) => (
                                      <div
                                        key={idx}
                                        className="bg-gray-50 rounded-lg p-3 flex-1"
                                      >
                                        <p className="text-xs text-gray-500 mb-1 [font-family:'Roboto',Helvetica]">
                                          {score.category}
                                        </p>
                                        <div className="flex items-center gap-2">
                                          <div className="w-20 h-6 bg-gray-200 rounded">
                                            <div
                                              className="h-full bg-blue-500 rounded"
                                              style={{ width: "80%" }}
                                            />
                                          </div>
                                          <span className="text-sm font-medium [font-family:'Roboto',Helvetica]">
                                            {score.score}
                                          </span>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}

                                {event.challengeResults && (
                                  <div className="bg-purple-50 rounded-lg p-3 mb-3">
                                    <p className="font-medium text-purple-800 text-sm mb-2 [font-family:'Roboto',Helvetica]">
                                      Challenge Results:
                                    </p>
                                    <div className="flex gap-3">
                                      {event.challengeResults.map((result, idx) => (
                                        <div
                                          key={idx}
                                          className="text-center flex-1"
                                        >
                                          <div className="text-lg font-bold text-purple-600 [font-family:'Roboto',Helvetica]">
                                            {result.score}
                                          </div>
                                          <div className="text-xs text-purple-700 [font-family:'Roboto',Helvetica]">
                                            {result.metric}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {event.current && event.scheduledInfo && (
                                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                                    <div className="flex items-center gap-2 mb-2">
                                      <ClockIcon className="w-4 h-4 text-blue-600" />
                                      <span className="font-medium text-blue-800 text-sm [font-family:'Roboto',Helvetica]">
                                        {event.scheduledInfo}
                                      </span>
                                    </div>
                                    <p className="text-sm text-blue-700 [font-family:'Roboto',Helvetica]">
                                      {event.panelInfo}
                                    </p>
                                  </div>
                                )}

                                <div className="flex items-center gap-4 text-sm text-gray-500 [font-family:'Roboto',Helvetica]">
                                  {event.interviewer && (
                                    <div className="flex items-center gap-1">
                                      <Avatar className="w-4 h-4">
                                        <AvatarImage src="/img-2.png" />
                                        <AvatarFallback>JM</AvatarFallback>
                                      </Avatar>
                                      <span>{event.interviewer}</span>
                                    </div>
                                  )}
                                  {event.duration && (
                                    <div className="flex items-center gap-1">
                                      <ClockIcon className="w-4 h-4" />
                                      <span>{event.duration}</span>
                                    </div>
                                  )}
                                  {event.result && (
                                    <div className="flex items-center gap-1">
                                      <CheckCircleIcon className="w-4 h-4 text-green-600" />
                                      <span className="text-green-600">
                                        {event.result}
                                      </span>
                                    </div>
                                  )}
                                  {event.interviewType && (
                                    <div className="flex items-center gap-1">
                                      <UsersIcon className="w-4 h-4" />
                                      <span>{event.interviewType}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};