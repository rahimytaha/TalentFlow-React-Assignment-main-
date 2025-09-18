import React from "react";
import { CandidateListingsSection } from "./sections/CandidateListingsSection/CandidateListingsSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";

export const CandidateProfile = () => {
  return (
    <div className="w-full flex flex-col">
      <CandidateListingsSection />
      {/* <FooterSection /> */}
    </div>
  );
};