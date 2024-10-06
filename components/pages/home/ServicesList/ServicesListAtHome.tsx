import SectionContainer from "@/components/layouts/SectionContainer";
import React from "react";
import ServicesListOne from "./ServicesListOne";
import { ArrowHeadIocn } from "@/assets/icons";

const ServicesListAtHome = () => {
  return (
    <SectionContainer className="flex flex-col gap-10 py-10 md:py-20">
      <div className="flex flex-col gap-6">
        <p className="text-sm text-text">
          Empower Your Business with Expert IT Consulting
        </p>
        <div className="flex flex-col md:flex-row justify-between md:items-end">
          <p className="text-xl md:text-3xl">
            Elevate Your Digital <br /> Experience with Our Expertise.
          </p>
          <p className=" text-sm h-fit flex gap-2 items-center justify-center">
            <span className="text-primary">
              <ArrowHeadIocn />
            </span>{" "}
            We provide all the services that you need to boost your{" "}
            <br className="hidden md:block" /> business up to a high level{" "}
          </p>
        </div>
      </div>
      <ServicesListOne />
    </SectionContainer>
  );
};

export default ServicesListAtHome;
