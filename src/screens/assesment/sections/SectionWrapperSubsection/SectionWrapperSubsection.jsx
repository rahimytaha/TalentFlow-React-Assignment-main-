import { MoreHorizontalIcon, PlusIcon } from "lucide-react";

import { Button } from "../../../../components/ui3/button";
import { Card, CardContent } from "../../../../components/ui3/card";

const sections = [
  {
    title: "Technical Knowledge",
    description: "Assess fundamental knowledge and concepts",
  },
  {
    title: "Problem Solving",
    description: "Evaluate analytical and problem-solving skills",
  },
];

export const SectionWrapperSubsection = () => {
  return (
    <section className="flex flex-col gap-4 border-b border-solid border-border pb-6">
      <header className="flex items-center justify-between px-6 pt-6">
        <h2 className="[font-family:'Roboto_Mono',Helvetica] font-normal text-gray-800 text-lg tracking-[0] leading-7">
          Assessment Sections
        </h2>

        <Button className="h-9 bg-blue-600 hover:bg-blue-700 rounded-lg gap-2 px-3">
          <PlusIcon className="w-3 h-5" />
          <span className="text-white text-sm [font-family:'Roboto_Mono',Helvetica] font-normal">
            Add Section
          </span>
        </Button>
      </header>

      <div className="flex flex-col gap-3 px-6">
        {sections.map((section, index) => (
          <Card
            key={index}
            className="rounded-lg border border-solid border-border"
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="[font-family:'Roboto_Mono',Helvetica] font-normal text-gray-800 text-base tracking-[0] leading-6">
                  {section.title}
                </h3>
                <MoreHorizontalIcon className="w-6 h-6 text-gray-400" />
              </div>

              <p className="[font-family:'Roboto_Mono',Helvetica] font-normal text-gray-600 text-sm tracking-[0] leading-5 mb-4">
                {section.description}
              </p>

              <Button
                variant="ghost"
                className="h-auto p-0 gap-2 text-blue-600 hover:text-blue-700"
              >
                <PlusIcon className="w-3 h-5" />
                <span className="text-sm [font-family:'Roboto_Mono',Helvetica] font-normal">
                  Add Question
                </span>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
