import React from "react";
import { Card, CardContent } from "../../../../components/ui3/card";
import { Textarea } from "../../../../components/ui3/textarea";

export const Div3Subsection = ()=> {
  return (
    <Card className="w-full max-w-[1056px] h-[353px] bg-white p-3 rounded-lg border border-solid border-gray-200">
      <CardContent className="p-0">
        <div className="ml-[25px] w-[1006px] mt-[25px] flex gap-[795.7px] border-0 border-none">
          <div className="w-[172.31px] flex gap-3 border-0 border-none">
            <div className="mt-1.5 w-8 h-8 flex bg-blue-100 rounded-full border-0 border-none items-center justify-center">
              <div className="w-[15px] h-6 font-semibold text-blue-600 text-base [font-family:'Roboto',Helvetica] tracking-[0] leading-[normal] flex items-center justify-center">
                4
              </div>
            </div>

            <div className="w-[128.31px] h-11 flex flex-col border-0 border-none">
              <div className="w-[129px] h-6 [font-family:'Roboto',Helvetica] font-semibold text-gray-800 text-base tracking-[0] leading-6 whitespace-nowrap">
                Long Text Answer
              </div>

              <div className="w-[108px] h-5 [font-family:'Roboto',Helvetica] font-normal text-gray-500 text-sm tracking-[0] leading-5 whitespace-nowrap">
                Problem Solving
              </div>
            </div>
          </div>

          {/* <img className="w-[38px] h-6" alt="Div" src="/div.svg" /> */}
        </div>

        <div className="ml-[25px] w-[1006px] h-[227px] flex flex-col border-0 border-none">
          <div className="w-[996px] h-12 [font-family:'Roboto',Helvetica] font-normal text-gray-800 text-base tracking-[0] leading-6">
            Explain the difference between server-side rendering (SSR) and
            client-side rendering (CSR). Include advantages and disadvantages of
            each approach.
          </div>

          <div className="w-[1006px] mt-4 rounded-md border border-solid border-gray-300 flex bg-white overflow-hidden">
            <Textarea
              className="mt-3 w-[1006px] h-32 ml-4 [font-family:'Roboto',Helvetica] font-normal text-[#adaebc] text-base tracking-[0] leading-6 border-none resize-none focus:ring-0 focus:outline-none bg-transparent"
              placeholder="Provide a detailed explanation..."
            />
          </div>

          <div className="w-[1006px] mt-[15px] flex gap-[714.7px] border-0 border-none">
            <div className="w-[184px] h-5 [font-family:'Roboto',Helvetica] font-normal text-gray-500 text-sm tracking-[0] leading-5 whitespace-nowrap">
              Minimum 100 words required
            </div>

            <div className="w-[108px] h-5 [font-family:'Roboto',Helvetica] font-normal text-gray-500 text-sm tracking-[0] leading-5 whitespace-nowrap">
              0/500 characters
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
