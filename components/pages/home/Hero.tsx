import SectionContainer from "@/components/layouts/SectionContainer";
import React, { ReactNode } from "react";
import HeroBanner from "./HeroBanner";
import Button from "@/components/general/Button";
import { StaticImageData } from "next/image";
interface HeroProps {
  title: ReactNode;
  subTitle: string;
  description: string;
  primaryButtonLabel: string;
  secondaryButtonLabel?: string;
  primaryButtonAction?: () => void;
  secondaryButtonAction?: () => void;
  images: StaticImageData[];
}

const Hero: React.FC<HeroProps> = ({
  title,
  subTitle,
  description,
  primaryButtonLabel,
  secondaryButtonLabel,
  images,
  primaryButtonAction,
  secondaryButtonAction
}) => {
  return (
    <SectionContainer className="grid grid-cols-1 lg:grid-cols-2 gap-20 py-10 md:py-20 items-center">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <p className="font-Urbanist">{subTitle}</p>
          <h1 className=" text-[clamp(1.8rem,5vw,3rem)] leading-[clamp(2rem,5vw,1)]">
            {title}
          </h1>
          <p className="w-[75%] text-text-gray">{description}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <Button onClick={primaryButtonAction} variant="black">
            {primaryButtonLabel}
          </Button>
          <Button onClick={secondaryButtonAction} variant="secondary">
            {secondaryButtonLabel}
          </Button>
        </div>
      </div>
      <HeroBanner images={images} />
    </SectionContainer>
  );
};

export default Hero;
