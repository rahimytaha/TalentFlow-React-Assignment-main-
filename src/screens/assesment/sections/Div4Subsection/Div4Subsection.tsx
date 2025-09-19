import { MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const Div4Subsection = (): JSX.Element => {
  return (
    <Card className="w-full max-w-[1056px] h-[244px] bg-white rounded-lg border border-solid border-gray-200">
      <CardContent className="p-0">
        <div className="ml-[25px] w-[1006px] mt-[25px] flex gap-[758.9px] border-0 border-none">
          <div className="w-[209.14px] flex gap-3 border-0 border-none">
            <Badge
              variant="secondary"
              className="mt-1.5 w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full border-0 border-none p-0"
            >
              <span className="w-[15px] h-6 font-semibold text-blue-600 text-base [font-family:'Roboto',Helvetica] tracking-[0] leading-[normal]">
                5
              </span>
            </Badge>

            <div className="w-[165.14px] h-11 flex flex-col border-0 border-none">
              <div className="w-[116px] h-6 [font-family:'Roboto',Helvetica] font-semibold text-gray-800 text-base tracking-[0] leading-6 whitespace-nowrap">
                Numeric Range
              </div>

              <div className="w-[166px] h-5 [font-family:'Roboto',Helvetica] font-normal text-gray-500 text-sm tracking-[0] leading-5 whitespace-nowrap">
                Performance Optimization
              </div>
            </div>
          </div>

          <MoreHorizontalIcon className="w-[38px] h-6 text-gray-400" />
        </div>

        <div className="ml-[25px] w-[1006px] h-[118px] flex flex-col border-0 border-none">
          <div className="w-[793px] h-6 [font-family:'Roboto',Helvetica] text-gray-800 whitespace-nowrap font-normal text-base tracking-[0] leading-6">
            What is the recommended maximum bundle size (in KB) for optimal web
            performance in modern applications?
          </div>

          <div className="w-[1006px] mt-4 flex gap-4 border-0 border-none">
            <Input
              className="w-32 h-[50px] bg-white rounded-md border border-solid border-gray-300 px-4 [font-family:'Roboto',Helvetica] font-normal text-base tracking-[0] leading-6"
              placeholder="Enter value"
            />

            <div className="mt-[13px] w-[21px] h-6 [font-family:'Roboto',Helvetica] font-normal text-gray-600 text-base tracking-[0] leading-6 whitespace-nowrap">
              KB
            </div>
          </div>

          <div className="w-[196px] h-5 mt-2 [font-family:'Roboto',Helvetica] font-normal text-gray-500 text-sm tracking-[0] leading-5 whitespace-nowrap">
            Acceptable range: 200-500 KB
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
