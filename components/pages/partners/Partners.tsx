import SectionContainer from "@/components/layouts/SectionContainer";
import React from "react";

const Partners = () => {
  return (
    <SectionContainer
      contentContainerClassName="md:py-10"
      className="text-center flex flex-col gap-10 md:gap-20"
    >
      <div>
        <h1 className="text-3xl">Our Partners</h1>
        <p className="">
          Partnering with us is a seamless and rewarding experience.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray w-full h-64 rounded-lg"></div>
        <div className="bg-gray w-full h-64 rounded-lg"></div>
        <div className="bg-gray w-full h-64 rounded-lg"></div>
        <div className="bg-gray w-full h-64 rounded-lg"></div>
        <div className="bg-gray w-full h-64 rounded-lg"></div>
        <div className="bg-gray w-full h-64 rounded-lg"></div>
        <div className="bg-gray w-full h-64 rounded-lg"></div>
      </div>
    </SectionContainer>
  );
};

export default Partners;
