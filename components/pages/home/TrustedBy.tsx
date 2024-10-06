import SectionContainer from "@/components/layouts/SectionContainer";
import React from "react";
import {
  Frame1,
  Frame2,
  Frame3,
  Frame4,
  Frame5,
  Frame6,
  Frame7,
  Frame8,
  Frame
} from "@/assets/images/svgs";
import Image from "next/image";

const TrustedBy = () => {
  return (
    <SectionContainer className="bg-black flex items-center justify-center py-20">
      <div className="w-full flex items-center justify-center flex-col gap-8">
        <p className="text-white text-center text-2xl font-thin">
          Trusted by the best companies
        </p>
        <div className="flex gap-4 md:gap-10 flex-wrap items-center justify-center md:w-[60%]">
          <Image src={Frame1} alt="" className="h-6 md:h-full" />
          <Image src={Frame2} alt="" className="h-6 md:h-full" />
          <Image src={Frame3} alt="" className="h-6 md:h-full" />
          <Image src={Frame4} alt="" className="h-6 md:h-full" />
          <Image src={Frame5} alt="" className="h-6 md:h-full" />
          <Image src={Frame6} alt="" className="h-6 md:h-full" />
          <Image src={Frame7} alt="" className="h-6 md:h-full" />
          <Image src={Frame8} alt="" className="h-6 md:h-full" />
          <Image src={Frame} alt="" className="h-6 md:h-full" />
        </div>
      </div>
    </SectionContainer>
  );
};

export default TrustedBy;
