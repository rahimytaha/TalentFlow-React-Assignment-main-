import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = () => {
  const footerSections = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Integrations", "API"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Contact"],
    },
    {
      title: "Support",
      links: ["Help Center", "Documentation", "Status", "Privacy"],
    },
  ];

  return (
    <footer className="w-full bg-gray-900 flex justify-center">
      <div className="w-full max-w-[1280px] px-20 py-16">
        <div className="flex flex-col gap-12">
          <div className="flex gap-8 px-6">
            <div className="w-[284px] flex flex-col gap-6">
              <div className="flex">
                <div className="flex gap-3 items-center">
                  <img className="w-10 h-10" alt="Logo" src="/logo-1.png" />
                  <div className="text-[25px] bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent [font-family:'Poppins',Helvetica] font-bold leading-7 whitespace-nowrap">
                    TalentFLOW
                  </div>
                </div>
              </div>

              <div className="[font-family:'Poppins',Helvetica] font-normal text-gray-400 text-base leading-6">
                The complete HR management platform for modern teams.
              </div>

              <img
                className="w-[284px] h-7"
                alt="Social media icons"
                src="/div-2.svg"
              />
            </div>

            {footerSections.map((section, index) => (
              <div key={index} className="w-[284px] flex flex-col gap-4">
                <div className="[font-family:'Poppins',Helvetica] font-semibold text-white text-base leading-6">
                  {section.title}
                </div>

                <div className="flex flex-col gap-2">
                  {section.links.map((link, linkIndex) => (
                    <div
                      key={linkIndex}
                      className="[font-family:'Poppins',Helvetica] font-normal text-gray-400 text-base leading-6 cursor-pointer hover:text-gray-300 transition-colors"
                    >
                      {link}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="px-6">
            <Separator className="bg-gray-800" />
            <div className="pt-8 flex justify-center">
              <div className="[font-family:'Poppins',Helvetica] font-normal text-gray-400 text-base text-center leading-6">
                © 2024 TalentFLOW. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};