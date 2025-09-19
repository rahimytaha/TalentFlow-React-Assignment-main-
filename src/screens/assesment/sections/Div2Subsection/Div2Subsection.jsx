import React from "react";
import { Badge } from "../../../../components/ui3/badge";
import { Card, CardContent } from "../../../../components/ui3/card";
import { Input } from "../../../../components/ui3/input";

export const Div2Subsection = () => {
  return (
    <Card className="w-full p-3 max-w-[1056px] h-[244px] bg-white rounded-lg border border-solid border-gray-200">
      <CardContent className="p-0">
        <div className="ml-[25px] w-[1006px] mt-[25px] flex justify-between items-start">
          <div className="flex gap-3 items-start">
            <Badge
              variant="secondary"
              className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold text-base [font-family:'Roboto',Helvetica] flex items-center justify-center p-0"
            >
              3
            </Badge>

            <div className="flex flex-col">
              <div className="[font-family:'Roboto',Helvetica] font-semibold text-gray-800 text-base leading-6 whitespace-nowrap">
                Short Text Answer
              </div>
              <div className="[font-family:'Roboto',Helvetica] font-normal text-gray-500 text-sm leading-5 whitespace-nowrap">
                CSS Flexbox
              </div>
            </div>
          </div>

          {/* <img className="w-[38px] h-6" alt="Div" src="/div.svg" /> */}
        </div>

        <div className="ml-[25px] w-[1006px] h-[118px] flex flex-col mt-4">
          <div className="[font-family:'Roboto',Helvetica] font-normal text-gray-800 text-base leading-6 whitespace-nowrap mb-4">
            What CSS property is used to make a container a flex container?
          </div>

          <Input
            className="w-full h-[50px] bg-white rounded-md border border-solid border-gray-300 px-4 [font-family:'Roboto',Helvetica] font-normal text-base"
            placeholder="Type your answer here..."
          />

          <div className="[font-family:'Roboto',Helvetica] font-normal text-gray-500 text-sm leading-5 whitespace-nowrap mt-2">
            Expected answer: display: flex
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
