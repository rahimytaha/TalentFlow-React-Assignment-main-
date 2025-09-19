import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui3/button";
import { Card, CardContent } from "../../../../components/ui3/card";

export const DivSubsection = () => {
  const statisticsData = [
    {
      value: "12",
      label: "Questions",
      color: "text-blue-600",
    },
    {
      value: "45",
      label: "Minutes",
      color: "text-green-600",
    },
    {
      value: "70%",
      label: "Pass Score",
      color: "text-purple-600",
    },
    {
      value: "156",
      label: "Completed",
      color: "text-orange-600",
    },
  ];

  return (
    <section className="flex flex-col gap-4">
      <header className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <h1 className="[font-family:'Roboto',Helvetica] font-bold text-gray-800 text-2xl tracking-[0] leading-8">
            Frontend Developer Assessment
          </h1>
          <p className="[font-family:'Roboto',Helvetica] font-normal text-gray-600 text-base tracking-[0] leading-6">
            Evaluate React, JavaScript, CSS, and problem-solving skills
          </p>
        </div>

        <nav className="flex gap-2 mt-2.5">
          <Button variant="ghost" className="h-auto flex gap-1 px-5 py-2.5">
            <ChevronLeftIcon className="w-3.5 h-[19px]" />
            <span className="[font-family:'Roboto',Helvetica] text-gray-600 text-base font-normal tracking-[0] leading-[normal]">
              Previous
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex gap-[2.3px] px-5 py-2.5"
          >
            <span className="[font-family:'Roboto',Helvetica] font-normal text-gray-600 text-base tracking-[0] leading-[normal]">
              Next
            </span>
            <ChevronRightIcon className="w-3.5 h-[19px]" />
          </Button>
        </nav>
      </header>

      <Card className="bg-white rounded-lg border border-solid">
        <CardContent className="p-[25px]">
          <h2 className="[font-family:'Roboto',Helvetica] font-semibold text-gray-800 text-lg tracking-[0] leading-[normal] mb-4">
            Assessment Overview
          </h2>

          <div className="grid grid-cols-4 gap-4">
            {statisticsData.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`font-bold text-2xl text-center [font-family:'Roboto',Helvetica] tracking-[0] leading-[normal] ${stat.color}`}
                >
                  {stat.value}
                </div>
                <div className="[font-family:'Roboto',Helvetica] font-normal text-gray-500 text-sm text-center tracking-[0] leading-[normal] mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
