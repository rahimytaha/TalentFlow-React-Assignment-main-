import { CheckIcon, MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";

export const Div1Subsection = (): JSX.Element => {
  const answerOptions = [
    {
      id: "var",
      label: "var",
      isSelected: false,
      className:
        "w-[1006px] h-[50px] flex gap-3 rounded-md border border-solid border-gray-200",
    },
    {
      id: "let",
      label: "let",
      isSelected: true,
      className:
        "w-[1006px] h-[50px] flex bg-green-50 rounded-md border border-solid border-green-300",
    },
    {
      id: "const",
      label: "const",
      isSelected: true,
      className:
        "w-[1006px] h-[50px] flex bg-green-50 rounded-md border border-solid border-green-300",
    },
    {
      id: "function",
      label: "function",
      isSelected: false,
      className:
        "w-[1006px] h-[50px] flex gap-3 rounded-md border border-solid border-gray-200",
    },
  ];

  return (
    <Card className="w-[1056px] h-[390px] bg-white rounded-lg border border-solid border-gray-200">
      <CardContent className="p-0">
        <div className="ml-[25px] w-[1006px] mt-[25px] flex gap-[743.8px] border-0 border-none">
          <div className="w-[224.22px] flex gap-3 border-0 border-none">
            <Badge className="mt-1.5 w-8 h-8 flex bg-blue-100 rounded-full border-0 border-none justify-center items-center">
              <div className="w-[15px] h-6 font-semibold text-blue-600 text-base [font-family:'Roboto',Helvetica] tracking-[0] leading-[normal]">
                2
              </div>
            </Badge>

            <div className="w-[180.22px] h-11 flex flex-col border-0 border-none">
              <div className="w-[181px] h-6 [font-family:'Roboto',Helvetica] font-semibold text-gray-800 text-base tracking-[0] leading-6 whitespace-nowrap">
                Multiple Choice Question
              </div>

              <div className="w-[108px] h-5 [font-family:'Roboto',Helvetica] font-normal text-gray-500 text-sm tracking-[0] leading-5 whitespace-nowrap">
                JavaScript ES6+
              </div>
            </div>
          </div>

          <MoreHorizontalIcon className="w-[38px] h-6" />
        </div>

        <div className="ml-[25px] w-[1006px] h-[264px] flex flex-col gap-4 border-0 border-none">
          <div className="w-[634px] h-6 [font-family:'Roboto',Helvetica] font-normal text-gray-800 text-base tracking-[0] leading-6 whitespace-nowrap">
            Which of the following are valid ways to declare variables in ES6+?
            (Select all that apply)
          </div>

          <div className="h-56 flex flex-col gap-2 border-0 border-none">
            {answerOptions.map((option) => (
              <div key={option.id} className={option.className}>
                {option.isSelected ? (
                  <>
                    <div className="mt-[17px] w-[17.5px] h-4 ml-[13px] flex items-center justify-center">
                      <Checkbox
                        checked={true}
                        className="w-4 h-4 bg-green-600 border-green-600"
                      />
                    </div>
                    <div className="mt-[13px] ml-[10.5px] flex border-0 border-none">
                      <div className="mt-0.5 [font-family:'Roboto',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
                        {option.label}
                      </div>
                    </div>
                    <div className="mt-[13px] w-3.5 h-6 ml-auto mr-4 flex items-center">
                      <CheckIcon className="w-3.5 h-6 text-green-600" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mt-[17px] w-4 h-4 ml-[13px]">
                      <Checkbox
                        checked={false}
                        className="w-4 h-4 bg-white border-black"
                      />
                    </div>
                    <div className="mt-[13px] [font-family:'Roboto',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap">
                      {option.label}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
