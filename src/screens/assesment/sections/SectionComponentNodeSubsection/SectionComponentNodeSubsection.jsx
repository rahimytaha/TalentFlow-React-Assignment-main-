import React from "react";
import { Badge } from "../../../../components/ui3/badge";
import { Card, CardContent } from "../../../../components/ui3/card";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui3/radio-group";

export const SectionComponentNodeSubsection = () => {
  const questionOptions = [
    { id: "useEffect", label: "useEffect", selected: false },
    { id: "useState", label: "useState", selected: true },
    { id: "useContext", label: "useContext", selected: false },
    { id: "useReducer", label: "useReducer", selected: false },
  ];

  return (
    <Card className="w-full p-3 max-w-[1056px] h-[390px] bg-white rounded-lg border border-solid">
      <CardContent className="p-0">
        <div className="ml-[25px] w-[1006px] mt-[25px] flex gap-[757.4px] border-0 border-none">
          <div className="w-[210.56px] flex gap-3 border-0 border-none">
            <Badge
              variant="secondary"
              className="mt-1.5 w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full border-0 border-none p-0"
            >
              <span className="font-semibold text-blue-600 text-base [font-family:'Roboto',Helvetica] tracking-[0] leading-[normal]">
                1
              </span>
            </Badge>

            <div className="w-[166.56px] h-11 flex flex-col border-0 border-none">
              <div className="w-[167px] h-6 [font-family:'Roboto',Helvetica] font-semibold text-gray-800 text-base tracking-[0] leading-6 whitespace-nowrap">
                Single Choice Question
              </div>

              <div className="w-[134px] h-5 [font-family:'Roboto',Helvetica] font-normal text-gray-500 text-sm tracking-[0] leading-5 whitespace-nowrap">
                React Fundamentals
              </div>
            </div>
          </div>

          {/* <img className="w-[38px] h-6" alt="Div" src="/div.svg" /> */}
        </div>

        <div className="ml-[25px] w-[1006px] h-[264px] flex flex-col gap-4 border-0 border-none">
          <div className="w-[503px] h-6 [font-family:'Roboto',Helvetica] font-normal text-gray-800 text-base tracking-[0] leading-6 whitespace-nowrap">
            Which hook is used to manage state in functional React components?
          </div>

          <RadioGroup
            defaultValue="useState"
            className="h-56 flex flex-col gap-2 border-0 border-none"
          >
            {questionOptions.map((option) => (
              <div
                key={option.id}
                className={`w-[1006px] p-1  h-[50px] flex items-center gap-3 rounded-md border border-solid ${
                  option.selected
                    ? "border-gray-300"
                    : "border-gray-300"
                }`}
              >
                <div className="ml-[13px] flex items-center">
                  {option.selected ? (
                    <RadioGroupItem
                      value={option.id}
                      className="w-4 h-4 rounded-full border-[0.5px] border-solid border-black"
                    />
                  ) : (
                    <RadioGroupItem
                      value={option.id}
                      className="w-4 h-4 rounded-full border-[0.5px] border-solid border-black"
                    />
                  )}
                </div>

                <div className="flex items-center justify-between flex-1">
                  <div className="[font-family:'Roboto',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap">
                    {option.label}
                  </div>

            
                </div>
              </div>
            ))}
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );
};
