import { PlusIcon, Trash2Icon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui3/button";
import { Card, CardContent } from "../../../../components/ui3/card";
import { Checkbox } from "../../../../components/ui3/checkbox";
import { Input } from "../../../../components/ui3/input";
import { Label } from "../../../../components/ui3/lable";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui3/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui3/select";
import { Textarea } from "../../../../components/ui3/textarea";

export const DivWrapperSubsection = () => {
  const answerOptions = [
    "let and const are block-scoped, var is function-scoped",
    "They are all the same",
    "var is the newest declaration method",
  ];

  return (
    <div className="h-[874px]  flex flex-col border-b border-solid border">
      <div className="px-6 w-full flex justify-between  mt-6  gap-[308px] border-0 border-none">
        <div className="mt-[6.5px] w-[173px] h-7 text-gray-800 text-lg leading-7 whitespace-nowrap [font-family:'Roboto_Mono',Helvetica] font-normal tracking-[0]">
          Question Builder
        </div>

        <Select defaultValue="single-choice">
          <SelectTrigger className="w-[191px] h-[41px] gap-[21px] rounded-lg bg-white border border-solid border-gray-300">
            <SelectValue>
              <div className="[display:-webkit-box] items-center justify-center w-[125px] [font-family:'Roboto_Mono',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                Single Choice
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="single-choice">Single Choice</SelectItem>
            <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
            <SelectItem value="text">Text</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="ml-6 w-[672px] h-[185px] mt-4 flex flex-col gap-2 border-0 border-none">
        <div className="w-[672px] flex border-0 border-none">
          <Label className="w-[115px] h-5 text-gray-700 text-sm leading-[normal] [font-family:'Roboto_Mono',Helvetica] font-normal tracking-[0]">
            Question Text
          </Label>
        </div>

        <div className="h-[157px] flex flex-col rounded-lg border border-solid border-gray-300">
    

          <div className="ml-px  border-0 border-none flex bg-white overflow-hidden">
            <Textarea
              className="mt- outline-none w-full  h-[100px] ml-4 [font-family:'Roboto_Mono',Helvetica] text-[#adaebc] font-normal text-base tracking-[0] leading-6 border-none resize-none"
              defaultValue="What is the difference between let, const, and var in JavaScript?"
            />
          </div>
        </div>
      </div>

      <div className="ml-6 w-[672px] h-[234px] mt-6 flex flex-col gap-3 border-0 border-none">
        <div className="w-[672px] flex border-0 border-none">
          <Label className="w-[123px] h-5 [font-family:'Roboto_Mono',Helvetica] font-normal text-gray-700 text-sm tracking-[0] leading-[normal]">
            Answer Options
          </Label>
        </div>

        <RadioGroup className="h-[166px] flex flex-col gap-2 border-0 border-none">
          {answerOptions.map((option, index) => (
            <div
              key={index}
              className="w-[672px] h-[50px] flex gap-3 rounded-lg border border-solid border items-center"
            >
              <RadioGroupItem
                value={`option-${index}`}
                className="mt-[18.5px] w-[13px] h-[13px] ml-[13px] rounded-full border-[0.5px] border-solid border-black"
              />

              <div className="mt-[13px] w-[569px] flex border-0 border-none">
                <div className="w-[569px] h-6 [font-family:'Roboto_Mono',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap">
                  {option}
                </div>
              </div>

              {/* <img
                className="mt-[13px] w-3.5 h-6"
                alt="Button"
                src="/button-1.svg"
              />

              <img
                className="mt-[13px] w-3.5 h-6"
                alt="Button"
                src="/button-3.svg"
              /> */}
            </div>
          ))}
        </RadioGroup>

        <Button
          variant="ghost"
          className="w-[118.02px] flex gap-2 border-0 border-none h-auto p-0"
        >
          <PlusIcon className="w-3.5 h-6" />
          <div className="mt-px w-[102px] h-6 text-blue-600 text-base [font-family:'Roboto_Mono',Helvetica] font-normal text-center tracking-[0] leading-[normal]">
            Add Option
          </div>
        </Button>
      </div>

      <div className="ml-6 w-[672px] h-[94px] mt-6 flex flex-col gap-3 border-0 border-none">
        <div className="w-[672px] flex border-0 border-none">
          <Label className="w-[140px] h-5 [font-family:'Roboto_Mono',Helvetica] font-normal text-gray-700 text-sm tracking-[0] leading-[normal]">
            Validation Rules
          </Label>
        </div>

        <div className="h-[62px] flex flex-col gap-3 border-0 border-none">
          <div className="w-[672px] gap-[7.5px] flex border-0 border-none items-center">
            <Checkbox className="mt-[3.5px] w-[17.5px] h-4" defaultChecked />
            <Label className="w-[68px] h-5 [font-family:'Roboto_Mono',Helvetica] font-normal text-gray-700 text-sm tracking-[0] leading-5 whitespace-nowrap">
              Required
            </Label>
          </div>

          <div className="w-[672px] flex gap-3 border-0 border-none items-center">
            <div className="mt-[5px] w-[159.42px] gap-3 flex border-0 border-none items-center">
              <Checkbox className="mt-[3.5px] w-[13px] h-[13px] bg-white rounded-[1px] border-[0.5px] border-solid border-black" />
              <Label className="w-[135px] h-5 [font-family:'Roboto_Mono',Helvetica] font-normal text-gray-700 text-sm tracking-[0] leading-5 whitespace-nowrap">
                Character limit:
              </Label>
            </div>

            <Input
              className="w-24 h-[30px] bg-white rounded border border-solid border-gray-300 [font-family:'Roboto_Mono',Helvetica] font-normal text-[#adaebc] text-sm tracking-[0] leading-5"
              placeholder="Max length"
            />
          </div>
        </div>
      </div>

      <div className="ml-6 w-[672px] h-[117px] mt-6 flex flex-col gap-3 border-0 border-none">
        <div className="w-[672px] flex border-0 border-none">
          <Label className="w-[148px] h-5 [font-family:'Roboto_Mono',Helvetica] font-normal text-gray-700 text-sm tracking-[0] leading-[normal]">
            Conditional Logic
          </Label>
        </div>

        <Card className="h-[85px] bg-gray-50 rounded-lg border border-solid p-3 ">
          <CardContent className="flex flex-col gap-2 p-[13px]">
            <div className="w-[646px] flex border-0 border-none">
              <div className="w-[228px] h-5 [font-family:'Roboto_Mono',Helvetica] font-normal text-gray-600 text-sm tracking-[0] leading-5 whitespace-nowrap">
                Show this question only if:
              </div>
            </div>

            <div className="w-[646px] flex gap-2 border-0  border-none">
              <Select defaultValue="previous-question">
                <SelectTrigger className="w-[181px] h-[31px] gap-1 rounded bg-white border border-solid border-gray-300">
                  <SelectValue>
                    <div className="[display:-webkit-box] items-center justify-center w-[138px] [font-family:'Roboto_Mono',Helvetica] text-black text-sm overflow-hidden text-ellipsis [-webkit-line-clamp:1] [-webkit-box-orient:vertical] font-normal tracking-[0] leading-[normal]">
                      Previous Question
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="previous-question">
                    Previous Question
                  </SelectItem>
                  <SelectItem value="question-1">Question 1</SelectItem>
                  <SelectItem value="question-2">Question 2</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="equals">
                <SelectTrigger className="w-[139px] h-[31px] gap-[49px] rounded bg-white border border-solid border-gray-300">
                  <SelectValue>
                    <div className="[display:-webkit-box] items-center justify-center w-[51px] [font-family:'Roboto_Mono',Helvetica] font-normal text-black text-sm tracking-[0] leading-[normal] overflow-hidden text-ellipsis [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                      equals
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="equals">equals</SelectItem>
                  <SelectItem value="not-equals">not equals</SelectItem>
                  <SelectItem value="contains">contains</SelectItem>
                </SelectContent>
              </Select>

              <Input
                className="mt-[0.5px] w-[310px] h-[30px] bg-white rounded border border-solid border-gray-300 [font-family:'Roboto_Mono',Helvetica] font-normal text-[#adaebc] text-sm tracking-[0] leading-5"
                placeholder="value"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="ml-6 pb-3  w-[672px] mt-6 flex gap-[245.5px] border-0 border-none">
        <Button
          variant="ghost"
          className="mt-[9px] mr-3  w-[166.03px] flex gap-2 border-0 border-none h-auto p-0"
        >
          <Trash2Icon className="mt-px w-3.5 h-[21px]" />
          <div className="mt-px w-[150px] h-6 [font-family:'Roboto_Mono',Helvetica] font-normal text-red-600 text-base text-center tracking-[0] leading-[normal]">
            Delete Question
          </div>
        </Button>

        <div className="w-[260.44px] flex gap-3 border-0 border-none">
          <Button
            variant="outline"
            className="w-[91.61px] h-[42px] rounded-lg border border-solid border-gray-300"
          >
            <div className="w-[63px] h-6 [font-family:'Roboto_Mono',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-[normal]">
              Cancel
            </div>
          </Button>

          <Button className="w-[156.83px] h-[42px] bg-blue-600 rounded-lg border-0 border-none">
            <div className="w-[130px] h-6 [font-family:'Roboto_Mono',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-[normal]">
              Save Question
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
