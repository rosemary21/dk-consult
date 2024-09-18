import { DiamondIcon, FocusIcon, SecurityIcon } from "@/assets/icons";
import Button from "@/components/general/Button";
import SectionContainer from "@/components/layouts/SectionContainer";
import React from "react";

const WhyChooseUs = () => {
  return (
    <SectionContainer className="grid justify-between grid-cols-1 md:grid-cols-2">
      <div className="space-y-6 ">
        <h2 className="text-3xl text-center md:text-left">Why choose us</h2>
        <p className="text-base md:w-[50%]">
          Our expert training and consulting solutions pave the way for your
          organization&apos;s succoss by driving continuous improvement,
          innovation and exceptional performance.
        </p>

        <div className="flex items-center gap-0 md:gap-12 justify-between text-center md:text-left">
          <div>
            <p className="text-2xl font-bold">
              56 <span className="text-primary">+</span>
            </p>
            <p className="text-sm text-primary">Project Done</p>
          </div>
          <div>
            <p className="text-2xl font-bold">
              15 <span className="text-primary">+</span>
            </p>
            <p className="text-sm text-primary">Years of Experience</p>
          </div>
          <div>
            <p className="text-2xl font-bold">
              100 <span className="text-primary">%</span>
            </p>
            <p className="text-sm text-primary">Client Satisfaction</p>
          </div>
        </div>
        <Button variant="black" className="w-full md:w-fit">
          Get in touch
        </Button>
      </div>
      <div className="hidden justify-en md:flex gap-6">
        <div className="flex flex-col justify-center  gap-6">
          <div className="bg-primary ml-[120px]  w-[350px]  flex items-center justify-between rounded-xl">
            <div className="p-5">
              <DiamondIcon />
            </div>
            <span className="h-full  w-[0.5px] bg-white"></span>
            <p className="text-white text-xl p-5">Commitment to Quality</p>
          </div>
          <div className="bg-primary  w-[350px]  flex items-center justify-between rounded-xl">
            <div className="p-5">
              <FocusIcon />
            </div>
            <span className="h-full  w-[0.5px] bg-white"></span>
            <p className="text-white text-xl p-5">Client-Centered Focus</p>
          </div>

          <div className="bg-primary ml-[120px]  w-[350px]  flex items-center justify-between rounded-xl">
            <div className="p-5">
              <SecurityIcon />
            </div>
            <span className="h-full  w-[0.5px] bg-white"></span>
            <p className="text-white text-xl p-5">Unmatched Expertise</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default WhyChooseUs;
