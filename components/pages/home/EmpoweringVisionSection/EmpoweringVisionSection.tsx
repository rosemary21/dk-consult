import { bg1, personOne } from "@/assets/images/pngs";
import Button from "@/components/general/Button";
import SectionContainer from "@/components/layouts/SectionContainer";
import { Routes } from "@/utils/variables";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const EmpoweringVisionSection = () => {
  const { push } = useRouter();
  return (
    <SectionContainer
      className="flex flex-col md:flex-row gap-3 h-full bg-gray py-12"
      contentContainerClassName="py-10 md:py-20"
    >
      <div className="flex-1 bg-white rounded-2xl p-3 px-5 pb-0">
        <div className="flex-1 flex items-center">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p>Innovating for Sustainable Growth</p>
              <h2 className="text-3xl">Empowering Your Vision</h2>
            </div>
            <p className="w-[75%] text-[#455A64]">
              Access innovative strategies and book a session with our IT
              consultants to drive your business forward.
            </p>
            <div className="flex flex-col md:flex-row gap-3">
              <Button
                onClick={() => {
                  push(Routes.Consult.path);
                }}
                variant="black"
                className="!px-3  "
              >
                Secure Your Consultation with Our Experts
              </Button>
              <Button
                onClick={() => {
                  push(Routes.Contact.path);
                }}
                variant="secondary"
              >
                Get in touch
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <Image src={personOne} alt="" />
          </div>
        </div>
      </div>
      <div className="flex-[0.5] overflow-hidden relative p-5 rounded-2xl w-full bg1">
        <div className="h-full w-full bg-white-500 p-5  rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-[#ffffff44] flex flex-col justify-between text-white">
          <div className="w-full h-full flex justify-end ">
            <Image src={bg1} alt="" className="h-10 w-10 rounded-full" />
          </div>
          <p className="w-[90%] text-2xl">Guiding Your Business to Success</p>
          <p className="text-sm">
            Our consultation services are designed to provide you with the
            technical guidance and strategic insight needed to make informed
            decisions.
          </p>
          <p className="text-sm">
            Whether you`re planning a new project or need advice on optimizing
            your current systems, we’re here to help.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default EmpoweringVisionSection;
