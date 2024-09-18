import React from "react";
import Button from "@/components/general/Button";
import Image from "next/image";
import {
  CustomSoftwareDevelopmentSvg,
  ServiceImg1,
  ServiceImg2,
  ServiceImg3,
  ServiceImg4,
  ServiceImg5,
} from "@/assets/images/svgs";
import { ArrowHeadIocn } from "@/assets/icons";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
}) => (
  <div className="bg-gray rounded-2xl p-5 flex flex-col gap-5">
    <div className="flex justify-end h-60">
      <Image
        src={imageSrc}
        alt={imageAlt}
        // width={200}
        height={200}
        className="object-contain"
      />
    </div>
    <div className="flex flex-col gap-3">
      <div className="text-xl flex items-center gap-3">
        {title}
        <ArrowHeadIocn />
      </div>
      <p className="text-text text-sm w-[90%]">{description}</p>
      <Button variant="black" isSpecial>
        Learn more
      </Button>
    </div>
  </div>
);

const ServicesListOne = () => {
  const services = [
    {
      title: "Custom Software Development",
      description:
        "Craft software solutions tailored to your specific needs, seamlessly integrating front-end aesthetics with robust back-end functionality.",
      imageSrc: CustomSoftwareDevelopmentSvg,
      imageAlt: "Custom Software Development Svg",
    },
    {
      title: "QA and Testing",
      description:
        "Fortify your technology with comprehensive manual and automated testing to ensure flawless performance.",
      imageSrc: ServiceImg5,
      imageAlt: "Custom Software Development Svg",
    },
    {
      title: "AI and Data Science",
      description:
        "Leverage cutting-edge AI, machine learning, and data engineering to transform data into actionable insights and business growth.",
      imageSrc: ServiceImg3,
      imageAlt: "Custom Software Development Svg",
    },
    {
      title: "Mobile App Development",
      description:
        "Design and deploy high-performance, scalable mobile applications for both iOS and Android, ensuring a seamless user experience.",
      imageSrc: ServiceImg4,
      imageAlt: "Custom Software Development Svg",
    },
    {
      title: "UX/UI Design",
      description:
        "Deliver intuitive, visually stunning designs that captivate and engage users, turning your vision into reality.",
      imageSrc: ServiceImg1,
      imageAlt: "Custom Software Development Svg",
    },
    {
      title: "Platform and Infrastructure",
      description:
        "Build a resilient, secure foundation with our DevOps and Security experts, ensuring your applications are always available and protected.",
      imageSrc: ServiceImg2,
      imageAlt: "Custom Software Development Svg",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          imageSrc={service.imageSrc}
          imageAlt={service.imageAlt}
        />
      ))}
    </div>
  );
};

export default ServicesListOne;
