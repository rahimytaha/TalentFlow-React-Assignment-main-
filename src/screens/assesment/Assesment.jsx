import { PlusIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Div1Subsection } from "./sections/Div1Subsection/Div1Subsection";
import { Div2Subsection } from "./sections/Div2Subsection/Div2Subsection";
import { Div3Subsection } from "./sections/Div3Subsection/Div3Subsection";
import { Div4Subsection } from "./sections/Div4Subsection/Div4Subsection";
import { Div5Subsection } from "./sections/Div5Subsection/Div5Subsection";
import { DivSubsection } from "./sections/DivSubsection/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection/DivWrapperSubsection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection/SectionComponentNodeSubsection";
import { SectionSubsection } from "./sections/SectionSubsection/SectionSubsection";
import { SectionWrapperSubsection } from "./sections/SectionWrapperSubsection/SectionWrapperSubsection";

export const Assesment = () => {
  return (
    <div className=" min-h-screen">
      <div className=" min-h-screen ">
        <div className="flex  min-h-screen  bg-white rounded-lg  border-2  border-[#ced4da]">
          <div className=" min-h-screen bg-gray-50">
            {/* <HeaderSubsection /> */}
            <div className="">
              {/* <AsideSubsection /> */}
              <div className=" flex">
                <div className="  flex flex-col bg-white ">
                  <SectionSubsection />
                   <SectionWrapperSubsection />
                  <DivWrapperSubsection />
                </div>
                 <div className="flex-1 flex flex-col gap-8 ml-8">
                  <DivSubsection />
                  <div className="flex flex-col gap-6">
                     <SectionComponentNodeSubsection />
                   <Div1Subsection />
                     <Div2Subsection />
                   <Div3Subsection />
                     <Div4Subsection />
                    <Div5Subsection /> 
                  </div>
                  <div className=" flex justify-center">
                    <Button
                      variant="outline"
                      className="h-auto w-auto flex gap-2 rounded-lg border border-dashed border-gray-300 px-6 py-3"
                    >
                      <PlusIcon className="w-3.5 h-6" />
                      <span className="[font-family:'Roboto',Helvetica] font-normal text-gray-600 text-base">
                        Add Question
                      </span>
                    </Button>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
