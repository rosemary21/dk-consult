import SectionContainer from "@/components/layouts/SectionContainer";
import React from "react";

const GreatResults = () => {
  return (
    <SectionContainer className="flex items-center justify-center flex-col gap-8 w-full">
      <div className="">
        <h2 className="text-3xl text-center md:text-left">
          No Guesswork, Just Great Results
        </h2>
        <p className="text-base  text-center">
          Partnering with us is a seamless and rewarding experience.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        <div>
          <h2 className="text-3xl flex items-center">
            <span className="text-primary">*</span>The right location
          </h2>
          <p>
            Our nearshore teams operate in your time zone, ensuring clear and
            timely communication in English.
          </p>
        </div>
        <div>
          <h2 className="text-3xl flex items-center">
            <span className="text-primary">*</span> The right fit
          </h2>
          <p>
            Whether you need individual experts or full-team collaborations, we
            offer flexible project management tailored to your needs.
          </p>
        </div>
        <div>
          <h2 className="text-3xl flex items-center">
            <span className="text-primary">*</span>The right timing
          </h2>
          <p>
            Our teams are ready to start when you are, with the flexibility to
            scale as your project evolves.
          </p>
        </div>
        <div>
          {" "}
          <h2 className="text-3xl flex items-center">
            <span className="text-primary">*</span> The right talent
          </h2>
          <p>
            Our rigorous selection process guarantees that only top-tier, highly
            skilled professionals join our team.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};
export default GreatResults;
