import SectionContainer from "@/components/layouts/SectionContainer";
import React from "react";

const AboutUsSection = () => {
  return (
    <SectionContainer className="space-y-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 gap-y-20">
        <div className="h-[400px] rounded-xl bg-gray"></div>
        <div className="space-y-5">
          <h2>About our compnay</h2>
          <h2 className="text-3xl">Providing the best service</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 gap-y-20">
        <div className="space-y-5">
          <h2>About our compnay</h2>
          <h2 className="text-3xl">Providing the best service</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="h-[400px] rounded-xl bg-gray"></div>
      </div>
    </SectionContainer>
  );
};

export default AboutUsSection;
