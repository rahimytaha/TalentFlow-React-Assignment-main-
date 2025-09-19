import React from "react";
import { Input } from "../../../../components/ui3/input";
import { Label } from "../../../../components/ui3/label";
import { Textarea } from "../../../../components/ui3/textarea";

export const SectionSubsection = () => {
  return (
    <section className="flex flex-col gap-4 border-b border-solid border-border p-6">
      <div className="flex flex-col gap-2">
        <Label
          htmlFor="assessment-title"
          className="[font-family:'Roboto_Mono',Helvetica] font-normal text-gray-700 text-sm"
        >
          Assessment Title
        </Label>
        <Input
          id="assessment-title"
          defaultValue="Frontend Developer Assessment"
          className="[font-family:'Roboto_Mono',Helvetica] font-normal text-black text-base h-[46px]"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label
          htmlFor="description"
          className="[font-family:'Roboto_Mono',Helvetica] font-normal text-gray-700 text-sm"
        >
          Description
        </Label>
        <Textarea
          id="description"
          defaultValue="Evaluate candidate's technical skills and problem-solving abilities."
          className="[font-family:'Roboto_Mono',Helvetica] font-normal text-[#adaebc] text-base h-20 resize-none"
        />
      </div>
    </section>
  );
};
