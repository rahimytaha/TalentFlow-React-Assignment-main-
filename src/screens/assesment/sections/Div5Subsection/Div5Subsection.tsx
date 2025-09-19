import { MoreHorizontalIcon, UploadIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const Div5Subsection = (): JSX.Element => {
  return (
    <Card className="w-full max-w-[1056px] h-[342px] bg-white rounded-lg border border-solid">
      <CardContent className="p-0">
        <div className="ml-[25px] w-[1006px] mt-[25px] flex gap-[840.9px]">
          <div className="w-[127.11px] flex gap-3">
            <Badge className="mt-1.5 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full border-0 hover:bg-blue-100">
              <span className="font-semibold text-base [font-family:'Roboto',Helvetica] tracking-[0] leading-[normal]">
                6
              </span>
            </Badge>

            <div className="w-[83.11px] h-11 flex flex-col">
              <div className="w-[81px] h-6 [font-family:'Roboto',Helvetica] font-semibold text-gray-800 text-base tracking-[0] leading-6 whitespace-nowrap">
                File UploadIcon
              </div>

              <div className="w-[84px] h-5 [font-family:'Roboto',Helvetica] font-normal text-gray-500 text-sm tracking-[0] leading-5 whitespace-nowrap">
                Code Sample
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="w-[38px] h-6 p-0 h-auto"
          >
            <MoreHorizontalIcon className="w-6 h-6" />
          </Button>
        </div>

        <div className="ml-[25px] w-[1006px] h-[216px] flex flex-col gap-4 mt-4">
          <div className="w-[742px] h-6 [font-family:'Roboto',Helvetica] font-normal text-gray-800 text-base tracking-[0] leading-6 whitespace-nowrap">
            UploadIcon a React component that demonstrates the use of hooks for
            state management and side effects.
          </div>

          <div className="h-44 flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-white">
            <UploadIcon className="w-12 h-12 text-gray-400 mb-4" />

            <div className="w-[282px] h-6 [font-family:'Roboto',Helvetica] font-normal text-base text-center tracking-[0] leading-4">
              <span className="text-gray-600 leading-6">
                Drag and drop your file here, or
              </span>
              <Button
                variant="link"
                className="text-blue-600 leading-6 p-0 h-auto font-normal"
              >
                browse
              </Button>
            </div>

            <div className="w-[298px] h-5 mt-2 [font-family:'Roboto',Helvetica] font-normal text-gray-500 text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
              Supported formats: .js, .jsx, .ts, .tsx (Max 5MB)
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
